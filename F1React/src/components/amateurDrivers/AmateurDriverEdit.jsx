import React, { useState, useContext } from "react";
import { AmateurDriverContext } from "../../contexts/AmateurDriverContext";
import AmateurDriversItem from "./AmateurDriversItem";

const AmateurDriverEdit = () => {
  const { getById, putAmateurDriver,  deleteAmateurDriver} = useContext(AmateurDriverContext);
  const [id, setId] = useState("1");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [aDriverToUpdate, setaDriverToUpdate] = useState({ name: "" });

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "name":
        setaDriverToUpdate({ ...aDriverToUpdate, name: e.currentTarget.value });
        break;
      default:
        break;
    }
  };

  const handleSearch = async () => {
    try {
      const results = await getById(searchTerm);
      setSearchResults(results);
      setSearchError("");
    } catch (error) {
      setSearchResults([]);
      setSearchError("No drivers found for the specified id.");
    }
  };

  const getByIdFromContext = async () => {
    try {
      console.log("Fetching AmateurDriver with ID:", id);
      const amDriverFromContext = await getById(id);
      console.log(aDriverToUpdate.name);
      setaDriverToUpdate(amDriverFromContext);
    } catch (error) {
      console.error("Error fetching amateur driver by ID:", error);
    }
  };

  const saveChanges = () => {
  if (aDriverToUpdate) {
    putAmateurDriver(aDriverToUpdate);
    console.log(aDriverToUpdate);
  }
};


  const getSearchResultsJSX = () => {
    if (!searchResults || typeof searchResults !== "object") {
      return <p>No results found.</p>;
    }

    // Sjekk om searchResults er et array (isArray)
    if (Array.isArray(searchResults)) {
      return searchResults.map((_amDriver) => (
        <AmateurDriversItem
          key={_amDriver.id}
          name={_amDriver.name}
          nationality={_amDriver.nationality}
          manufacturer={_amDriver.manufacturer}
          team={_amDriver.team}
          image={`http://localhost:5187/images/Amateurdrivers_img/${_amDriver.team}.png`}
        />
      ));
    }

    // Hvis searchResults er et enkelt objekt, bruk det direkte
    return (
      <AmateurDriversItem
        key={searchResults.id}
        name={searchResults.name}
        nationality={searchResults.nationality}
        manufacturer={searchResults.manufacturer}
        team={searchResults.team}
        image={`http://localhost:5187/images/Amateurdrivers_img/${searchResults.team}.png`}
      />
    );
  };

  return (
    <section className="mb-3">
      <h3>Rediger AmateurDriver</h3>
      <div>
        <label className="p-3">
          Angi id på "Amateur Driver" du ønsker å endre navnet på:{" "}
        </label>
        <input onChange={handleChange} name="id" value={id} type="text" />
        <input onClick={getByIdFromContext} type="button" value="Hent etter id" className="btn-amDriver" />
      </div>
      <div>
        <label className="p-3">Skriv inn navnet du ønsker å endre til: </label>
        <input onChange={handleChange} value={aDriverToUpdate?.name} placeholder="navn" type="text" name="name"/>
        <input onClick={saveChanges} type="button" value="Lagre endring" className="btn-amDriver"/>
      </div>
      <section className="row g-5">{searchError ? <p>{searchError}</p> : getSearchResultsJSX()}</section>
      
    </section>
  );
};

export default AmateurDriverEdit;

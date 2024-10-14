import React, { useState, useContext } from "react";
import { DriversContext } from "../../contexts/DriversContext";
import DriversItem from "./DriversItem";

const DriversSearchName = () => {
  const { getByName } = useContext(DriversContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState("");

  const handleSearch = async () => {
    try {
      const results = await getByName(searchTerm);
      setSearchResults(results);
      setSearchError("");
    } catch (error) {
      setSearchResults([]);
      setSearchError("No drivers found for the specified name.");
    }
  };

  const getSearchResultsJSX = () => {
    if (!searchResults || typeof searchResults !== 'object') {
      return <p>No results found.</p>;
    }

    // Sjekk om searchResults er et array (isArray)
    if (Array.isArray(searchResults)) {
      return searchResults.map((_driver, i) => (
        <DriversItem
          key={i}
          rank={_driver.rank}
          points={_driver.points}
          name={_driver.name}
          nationality={_driver.nationality}
          team={_driver.team}
          imageDriver={`http://localhost:5187/images/Drivers_img/${_driver.imageDriver}`}
        />
      ));
    }

    // Hvis searchResults er et enkelt objekt, bruk det direkte
    return (
      <DriversItem
        rank={searchResults.rank}
        points={searchResults.points}
        name={searchResults.name}
        nationality={searchResults.nationality}
        team={searchResults.team}
        imageDriver={`http://localhost:5187/images/Drivers_img/${searchResults.imageDriver}`}
      />
    );
  };

  return (
    <section>
      <h3 className="search-txt">Search by Name</h3>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Name of the Driver"
        />
        <button onClick={handleSearch} className="search-txt">Search</button>
      </div>
      <section className="row g-5">
        {searchError ? <p>{searchError}</p> : getSearchResultsJSX()}
      </section>
    </section>
  );
};

export default DriversSearchName;

import React, { useState, useContext } from "react";
import { TeamsContext } from "../../contexts/TeamsContext";
import TeamsItem from "./TeamsItem";
import { useActionData } from "react-router-dom";

const TeamsSearchTeamName = () => {
    const { getByTeamName } = useContext(TeamsContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState("");

    const handleSearch = async () => {
        try{
            const result = await getByTeamName(searchTerm);
            setSearchResults(result);
            setSearchError("");
        } catch( error ){
            setSearchResults([]);
            setSearchError("No teams fount for the specific TeamName...");
        }
    };

    const getSearchResultsJSX = () => {
        if( !searchResults || typeof searchResults !== 'object'){
            return <p>No Result Found</p>;
        }
        if(Array.isArray(searchResults)){
            return searchResults.map((_team, i) =>  (
                <TeamsItem
                key={i}
                rank={_team.rank}
                teamName={_team.teamName}
                manufacture={_team.manufacture}
                driver1={_team.driver1}
                driver2={_team.driver2}
                imageLogo={`http://localhost:5187/images/Logo_img/${_team.teamName}.png`}
                image={`http://localhost:5187/images/Cars_img/${_team.teamName}.png`}
                />
            ));
        }
            return (
        <TeamsItem
            rank={searchResults.rank}
            teamName={searchResults.teamName}
            manufacture={searchResults.manufacture}
            driver1={searchResults.driver1}
            driver2={searchResults.driver2}
            imageLogo={`http://localhost:5187/images/Logo_img/${searchResults.teamName}.png`}
            image={`http://localhost:5187/images/Cars_img/${searchResults.teamName}.png`}
        />
        );
    };

    return (
        <section>
            <h3 className="search-txt">Search by TeamName</h3>
            <div>
                <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter Name of the Team"
                />
                <button onClick={handleSearch} className="search-txt">Search</button>
            </div>
            <section className="row g-5">
                {searchError ? <p>{searchError}</p> : getSearchResultsJSX()}
            </section>
        </section>
    )
};
export default TeamsSearchTeamName;
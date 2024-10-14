import React, { useEffect, useState, useContext} from "react";
import TeamService from "../../services/TeamService";
import TeamsItem from "./TeamsItem";
import { TeamsContext } from "../../contexts/TeamsContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css';


const TeamsList = () => {

    const {teams} = useContext(TeamsContext); 

    const getTeamsJSX = () => {

        const teamsJSX = teams.map((_teams, i) => (
            <TeamsItem 
                key={i}
                rank={_teams.rank}
                teamName={_teams.teamName}
                manufacture={_teams.manufacture}
                driver1={_teams.driver1}
                driver2={_teams.driver2}
                imageLogo={`http://localhost:5187/images/Logo_img/${_teams.teamName}.png`}
                image={`http://localhost:5187/images/Cars_img/${_teams.teamName}.png`}
            />
        ));
        return teamsJSX;
        
    }

    return (
        <section>
            <h3 className="search-txt">Teams</h3>
            <p className="search-txt">Numbers of Professional teams: {teams.length}</p>
            <section className="row g-5">{getTeamsJSX()}</section>
        </section>
    )
}

export default TeamsList;







import RacesItem from "./RacesItem";
import RacesService from "../../services/RaceService";
import React, { useEffect, useContext } from "react";
import { RacesContext } from "../../contexts/RacesContext";

const RacesList = () => {
    const { races, sortRacesByDate } = useContext(RacesContext);

    const getRaceJSX = () => {
        const racesJSX = races.map((_races, i) => (
            <RacesItem
                key={i}
                date={_races.date}
                winner={_races.winner}
                winnerTime={_races.winnerTime}
                grandprix={_races.grandPrix}
                team={_races.team}
                nrOfLaps={_races.nrOfLaps}
            />
        ));
        return racesJSX;
    };

    return (
        <section>
            <div className="container text-center">
                <h2 className="race-title">Race Results 2023</h2>
                <button onClick={sortRacesByDate} className="btn btn-outline-dark">Sort By Newest Date</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>WINNER</th>
                            <th>TIME</th>
                            <th>GRAND PRIX</th>
                            <th>TEAM</th>
                            <th>LAPS</th>
                        </tr>
                    </thead>
                </table>
                <section>{getRaceJSX()}</section>
            </div>
            <div></div>
        </section>
    );
};

export default RacesList;


// import 'bootstrap/dist/css/bootstrap.min.css';

// inspirert av denne resultatlisten: https://www.formula1.com/en/results.html/2023/races.html
import React, { useContext } from 'react';
import { RacesContext } from '../../contexts/RacesContext';

const RacesItem = ({ id, date, winner, winnerTime, grandprix, team, nrOfLaps }) => {

    return (
        <section className="card mb-3">
            <ul className="card-body d-flex justify-content-between align-items-center">
                <p className="card-title">{date}</p>
                <p className="card-subtitle mb-2 text-muted">{winner}</p>
                <p className="card-subtitle mb-2 text-muted">{winnerTime}</p>
                <p className="card-subtitle mb-2 text-muted">{grandprix}</p>
                <p className="card-subtitle mb-2 text-muted">{team}</p>
                <p className="card-text">{nrOfLaps}</p>
            </ul>
        </section>
    )
}

export default RacesItem;
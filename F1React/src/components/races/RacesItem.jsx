// inspirert av denne resultatlisten: https://www.formula1.com/en/results.html/2023/races.html
import React, { useContext } from 'react';
import { RacesContext } from '../../contexts/RacesContext';

const RacesItem = ({ id, date, winner, winnerTime, grandprix, team, nrOfLaps }) => {

    return (
        <section className="card mb-3">
            <ul className="card-body d-flex justify-content-between align-items-center">
                <p className="card-title fs-6">{date}</p>
                <p className="card-subtitle mb-4 text-muted fs-6">{winner}</p>
                <p className="card-subtitle mb-4 text-muted fs-6">{winnerTime}</p>
                <p className="card-subtitle mb-4 text-muted fs-6">{grandprix}</p>
                <p className="card-subtitle mb-4 text-muted fs-6">{team}</p>
                <p className="card-text mb-4 text-muted fs-6">{nrOfLaps}</p>
            </ul>
        </section>
    )
}
export default RacesItem;
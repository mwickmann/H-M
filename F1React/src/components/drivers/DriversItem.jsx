import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css';

const DriversItem = ({ id, rank, points, name, nationality, team, imageDriver }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getBorderColor = (team) => {
        const trimmedTeam = team.trim().toLowerCase(); // Fjern ekstra mellomrom og gjør det til små bokstaver

        switch (trimmedTeam) {
            case 'red bull racing':
                return '#1e5bc6';
            case 'mercedes':
                return '#6cd3bf';
            case 'ferrari':
                return '#ed1c24';
            case 'mclaren':
                return '#f58020';
            case 'aston martin':
                return '#2d826d';
            case 'alpine':
                return '#2293d1';
            case 'williams':
                return '#37bedd';
            case 'alpha tauri':
                return '#4e7c9b';
            case 'alfa romeo':
                return '#b12039';
            case 'haas':
                return '#b6babd';
            default:
                return 'black';
        }
    };

    return (
        <article className="col-12 col-md-6 col-lg-4">
            <div
                className={`p-3 card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ borderColor: isHovered ? getBorderColor(team) : '' }}
            >
                <section className="container-numbers-driver">
                    <div className="rank-number">{rank}</div>
                    <div className="points">
                        {points}
                        <div className="p-1 rounded-1 PTS">PTS</div>
                    </div>
                </section>
                <hr className="solid"></hr>
                <h4 className="driver-name name-container">
                    <div
                        className={`vertical-line ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ borderColor: isHovered ? getBorderColor(team) : '' }}
                    ></div>
                    {name}
                </h4>
                <hr className="solid"></hr>
                <div className="nationality-driver">{nationality}</div>
                <hr className="solid"></hr>
                <div className="team-driver">{team}</div>
                <img src={imageDriver} alt={`${name} - ${nationality}`} className="img-fluid" />
            </div>
        </article>
    );
};

export default DriversItem;
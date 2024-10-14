import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css';
const TeamsItem = ({ id, rank, teamName, manufacture, driver1, driver2, image, imageLogo }) => {    
    const [isHovered, setIsHovered] = useState(false);
    const [colorSet, setColorSet] = useState(false);
    

    const getBorderColor = (teamName) => {
        if ( colorSet ) return '';
        const trimmedteamName = teamName ? teamName.trim().toLowerCase() : ''; // Legg til sjekk for null eller undefined
      
        switch (trimmedteamName) {
            case 'red bull racing':
                setColorSet(true);
                return '#1e5bc6';
            case 'mercedes':
                setColorSet(true);
                return '#6cd3bf';
            case 'ferrari':
                setColorSet(true);
                return '#ed1c24';
            case 'mclaren':
                setColorSet(true);
                return '#f58020';
            case 'aston martin':
                setColorSet(true);
                return '#2d826d';
            case 'alpine':
                setColorSet(true);
                return '#2293d1';
            case 'williams':
                setColorSet(true);
                return '#37bedd';
            case 'alpha tauri':
                setColorSet(true);
                return '#4e7c9b';
            case 'alfa romeo':
                setColorSet(true);
                return '#b12039';
            case 'haas':
                setColorSet(true);
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
                style={{ borderColor: isHovered ? getBorderColor(teamName) : '' }}
            >
                {/* Rank + Points */}
                <section className="container-numbers-driver">
                    <div className="rank-number">{rank}</div>
                    <div  className="p-1 rounded-1 PTS">PTS</div>
                </section>
                <hr className="solid"></hr>

                {/* Team + logo */}
                <section className="container-teams">
                        <div
                            className={`vertical-line ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{ borderColor: isHovered ? getBorderColor(teamName) : '' }}
                            
                            > </div>
                            <div className="teams-teamName">{teamName}</div>
                            <div>
                                <img src={imageLogo} alt={`${teamName} logo`} className="img-fluid logo-img" />
                         </div>
                </section>

                {/* Driver1 + Driver2 */}
                <hr className="solid"></hr>
                <section className="container-drivers-teams col">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                        <div className='col'>
                            <div className='row align-items-center'>
                            <p className='driverX-name'>{driver1}</p>
                            <img src={`http://localhost:5187/images/DriversForTeam_img/${driver1}.png`} alt={`${driver1} picture`} className='img-fluid driveX-img' />
                            </div>
                        </div>
                        <div className='vertical-line'></div>
                        <div className='col'>
                            <div className='row align-items-center'>
                            <p className='driverX-name'>{driver2}</p>
                            <img src={`http://localhost:5187/images/DriversForTeam_img/${driver2}.png`} alt={`${driver2} picture`} className='img-fluid driveX-img' />
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

                <hr className="solid"></hr>
                <img src={image} alt={`${teamName}`} className="img-fluid" />
            </div>
        </article>
    );
};

export default TeamsItem;


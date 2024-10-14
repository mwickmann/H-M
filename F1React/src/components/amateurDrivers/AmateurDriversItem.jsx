import React, { useState } from "react";

const AmateurDriversItem = ({name, nationality, manufacture, team, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBorderColor = (team) => {
    const trimmedTeam = team.trim().toLowerCase();

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
        <hr className="solid" 
        style={{ borderColor: isHovered ? getBorderColor(team) : '' }}
        ></hr>
        <h4 className="driver-name name-container">
          <div
            className={`vertical-line ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ borderColor: isHovered ? getBorderColor(team) : '' }}
          ></div>
          {name}
        </h4>
        <hr className="solid"
        style={{ borderColor: isHovered ? getBorderColor(team) : '' }}>

        </hr>
        <div className="nationality-driver">{nationality}</div>
        <hr className="solid" 
        style={{ borderColor: isHovered ? getBorderColor(team) : '' }}>

        </hr>
        <div className="team-driver">{team}</div>
        <img src={image} alt={`${name} - ${nationality}`} className="img-fluid" />
      </div>
    </article>
  );
};


export default AmateurDriversItem;
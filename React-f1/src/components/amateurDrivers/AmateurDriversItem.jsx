import React, { useState } from "react";

const AmateurDriversItem = ({name, nationality, manufacture, team, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [colorSet, setColorSet] = useState(true);

  const getBorderColor = (team) => {
    if (colorSet) return '';
    const trimmedteamName = team?.trim().toLowerCase() ?? '';

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

  const commonStyle = {
    borderColor: isHovered ? getBorderColor(team) : '',
  };

  return (
    
    <article className="col-12 col-md-6 col-lg-4">
      <div
        className={`p-3 card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={commonStyle}
      >
        <hr className="solid" style={commonStyle}></hr>
        <h4 className="driver-name name-container">
          <div
            className={`vertical-line ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={commonStyle}
          ></div>
          {name}
        </h4>
        <hr className="solid" style={commonStyle}></hr>
        <div className="nationality-driver">{nationality}</div>
        <hr className="solid" style={commonStyle}></hr>
        <div className="team-driver">{team}</div>
        <img src={image} alt={`${name} - ${nationality}`} className="img-fluid" />
      </div>
    </article>
  );
};

export default AmateurDriversItem;

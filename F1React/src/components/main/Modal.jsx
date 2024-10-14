import React, { useState } from 'react';
import '/src/index.css';
import AmateurDriverService from '../../services/AmateurDriverService';

function RegistrationModal({ showModal, setShowModal, onRegister }) {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [team, setTeam] = useState("");
  const [image, setImage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const teams = ['Red Bull Racing', 'Ferrari', 'McLaren', 'Mercedes', 'Alfa Romeo', 'Alpha Tauri', 'Alpine', 'Aston Martin', 'Williams', 'Haas' ];
  const cars = ['Red Bull Racing', 'Ferrari', 'McLaren', 'Mercedes', 'Alfa Romeo', 'Alpha Tauri', 'Alpine', 'Aston Martin', 'Williams', 'Haas'];

  const handleCloseModal = () => {
    setShowModal(false);
    setShowMessage(false);
  };

const handleChange = (e) => {
  const name = e.currentTarget.name;
  switch (name) {
    case "name":
      setName(e.currentTarget.value);
      break;
    case "nationality":
      setNationality(e.currentTarget.value);
      break;
    case "manufacturer":
      setManufacturer(e.currentTarget.value);
      break;
    case "team":
      setTeam(e.currentTarget.value);
      break;
    case "image":
      setImage(e.currentTarget.files[0]);
      break;
  }
};


const saveImage = async () => {
  // Validering: Sjekk om alle feltene er fylt ut
  if (!name || !nationality || !manufacturer || !team || !image) {
   alert("You need to fill out all fields")
    return;
  }

  const newAmateurDriver = {
    name: name,
    nationality: nationality,
    manufacturer: manufacturer,
    team: team,
    image: image.name
  };
  AmateurDriverService.postAmateurDriver(newAmateurDriver, image);
  setShowModal(false);
};


return (
  <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal-content">
      <span className="close" onClick={handleCloseModal}>
        &times;
      </span>
      <h2>Register as a driver!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveImage();
        }}
        className="registration-form"
      >
        <div className="input-group">
          <input
            type="text"
            id="name-input"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            id="nationality-input"
            name="nationality"
            placeholder="Nationality"
            value={nationality}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <select
            id="select-team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option value="" disabled>
              Choose Your Team
            </option>
            {teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <select
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          >
            <option value="" disabled>
              Choose Car
            </option>
            {cars.map((car, index) => (
              <option key={index} value={car}>
                {car}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <input
            type="file"
            name="image"
            className="image-input"
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <input
            type="button"
            value="Register"
            className="btn btn-register m-4 btn-outline-dark"
            id="save-btn"
            onClick={saveImage}
          />
        </div>
      </form>

      {showMessage && (
        <div className="registration-message">
          <p>You are now registered!</p>
        </div>
      )}
    </div>
  </div>
);

}

export default RegistrationModal;
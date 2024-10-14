
import React, { useState } from 'react';
// import '../css/main.css'
import '/src/index.css';

function RegistrationModal({ showModal, setShowModal }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [registered, setRegistered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const teams = ['Red Bull Racing', 'Ferrari', 'McLaren', 'Mercedes']; // Liste med lagalternativer
  const cars = ['Mercedes', 'Ferrari', 'Haas']; // Liste med bilalternativer

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setRegistered(true);
    setShowMessage(true);
    console.log('Register as a driver:', {
      firstName,
      lastName,
      nationality,
      selectedTeam,
      selectedCar,
    });
    setFirstName('');
    setLastName('');
    setNationality('');
    setSelectedTeam('');
    setSelectedCar('');
    setShowModal(false);
  };
return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        <h2>Register as a driver!</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
          <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
            <option value="" disabled>
              Choose Your Team
            </option>
            {teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
          <select value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)}>
            <option value="" disabled>
              Choose Car
            </option>
            {cars.map((car, index) => (
              <option key={index} value={car}>
                {car}
              </option>
            ))}
          </select>
          <button type="submit" className='btn btn-outline-dark'>Register</button>

        </form>
        {showMessage && (
        <div className="registration-message">
          <p>You are now registered!</p>
        </div>)}
      </div>

    </div>
  );
}

export default RegistrationModal;
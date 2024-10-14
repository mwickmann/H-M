// NB: denne koden er inspirert av Intro Til Programmering Eksamen H2021, Oppgave 2. 
import '/src/index.css';
import React, { useState, useEffect } from 'react';


const RaceGame = () => {
  const [positionCar1, setPositionCar1] = useState(0);
  const [positionCar2, setPositionCar2] = useState(0);
  const [positionCar3, setPositionCar3] = useState(0);
  const [raceFinished, setRaceFinished] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState('');
  const [finishedCarsCount, setFinishedCarsCount] = useState(0);

  // 

  const startRace = () => {
    setTimeout(() => {
      moveCar(900, setPositionCar1, 1); 
    }, 0); 

    setTimeout(() => {
      moveCar(1100, setPositionCar2, 2); 
    }, 0); 

    setTimeout(() => {
      moveCar(1300, setPositionCar3, 3); 
    }, 0); 
  };

  const moveCar = (finishLine, setPositionCar, speed) => {
    let newPosition = 0;
    const interval = setInterval(() => {
      newPosition += speed;
      setPositionCar(newPosition);
      if (newPosition >= finishLine) {
        clearInterval(interval);
        setFinishedCarsCount((prevCount) => prevCount + 1);
      }
    }, 0);
  };
  // tar i bruk useeffect for å sette at car3 vinner løpet, dermed vil det bli skrevet ut en melding til bruker.
  useEffect(() => {
    if (finishedCarsCount === 3) {
      setWinnerMessage('Woooow! Did you see that?! HE ACTUALLY WON');
      setRaceFinished(true);
    }
  }, [finishedCarsCount]);

  return (
    <div className='row g-5'> 
    <section className='col-12 col-md-6 col-lg-4 text-center'>
      <h2 className='text-center race-title'>Can Rolando beat the best drivers in the world? </h2>
      <button onClick={startRace} className='btn btn-outline-dark'>READY, SET, GO!</button>

      <div className="race-container">
        <img
          src={`http://localhost:5187/images/gameCars/car1.png`}
          alt="Car 1"
          className="car-1"
          style={{
            transition: 'left 2s ease-in-out',
            left: `${positionCar1}px`
          }}
        />
        <img
          src={`http://localhost:5187/images/gameCars/car2.png`}
          alt="Car 2"
          className="car-2"
          style={{
            transition: 'left 2s ease-in-out',
            left: `${positionCar2}px`
          }}
        />
        <img
          src={`http://localhost:5187/images/gameCars/rolando3.png`}
          alt="Car 3"
          className="car3"
          style={{
            transition: 'left 2s ease-in-out',
            left: `${positionCar3}px`
          }}
        />
        {raceFinished ? <div className='winner-message'>{winnerMessage}</div> : null}

        <img src={`http://localhost:5187/images/gameCars/racingfield.jpg`} alt="Race track" className="race-track" />
      </div>
    </section>
    </div>
  );
};

export default RaceGame;
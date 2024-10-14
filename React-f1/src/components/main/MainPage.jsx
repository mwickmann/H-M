import React, { useState, useEffect } from 'react';
// import '../css/main.css'
import RegistrationModal from './Modal'
import ImageCarousel from './Carousel';
// import '../css/carousel.css'; 
import Carousel from "./Carousel";
import '/src/index.css';


import '/src/index.css';
import { Link } from 'react-router-dom';


const MainPage = () => {

  useEffect(() => {
    const countDownDate = new Date('March 1, 2024 18:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const countdownElement = document.querySelector('#countdown-section');

      if (countdownElement) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s` ;

        if (distance < 0) {
          clearInterval(interval); // Clear the interval here
          countdownElement.innerHTML = 'EXPIRED';
        }
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval); // Clear countdownInterval
  }, []); // Empty dependency array for initial run only

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log(handleOpenModal)
  };
return (
      <section className=' mainPageBanner'>
        <h1>Special F1 Event In Monaco!</h1>
        <div>
        <div className='col-12 col-md-6 col-lg-4 card-body d-flex justify-content-between align-items-center'>
        <div id="countdown-section"></div>
        <h4>March 1, 2024 18:00:00</h4>
        </div>
        <div className='col button-container'>
        <button onClick={handleOpenModal}className='btn btn-outline-dark card-subtitle text-muted' id='btn-signup'>Sign Up Here!</button>
      <RegistrationModal showModal={showModal} setShowModal={setShowModal} />
      <Link to="main"><button className='btn btn-outline-dark' id='btn-seeregister'>See Who Has Registred!</button></Link>
      </div>
      </div>
      <Carousel/>
       </section>

    );
  };

  export default MainPage;
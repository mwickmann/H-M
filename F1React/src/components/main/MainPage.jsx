import React, { useState, useEffect } from 'react';
import RegistrationModal from './Modal'
import ImageCarousel from './Carousel';
import Carousel from "./Carousel";
import '/src/index.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const MainPage = () => {
  const [driverRegistered, setDriverRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);


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

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

        if (distance < 0) {
          clearInterval(interval); 
          countdownElement.innerHTML = 'EXPIRED';
        }
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval); 
  }, []);


  const handleDriverRegistered = () => {
    setDriverRegistered(true);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    console.log(handleOpenModal)
  };



return (
  <div>
  <section className='mainPageBanner'>
    <h1 className='m-5 p-5 row g-5 d-flex justify-content-center align-items-center text-center'>Special F1 Event In Monaco!</h1>
    <div className='col-12 col-md-6 col-lg-4 card-body d-flex justify-content-between align-items-center'>
</div>
    </section>
  <main>
  <div className='where-section col-12 d-flex flex-column flex-md-row justify-content-between'>
  <div className='d-flex flex-column m-4'>
    <h3>When?</h3> 
    <div id="countdown-section"></div>
    <p id="date">March 1, 2024 18:00:00</p>
  </div>

  <div className='d-flex flex-column m-4'>
    <h3>Where?</h3>
    <p>Monte Carlo Racing Field, Monaco</p>
  </div>

  <div className='d-flex flex-column m-4'>
    <h3>What?</h3>
    <p>The Professionals Against You!</p>
  </div>
</div>
  <div className='button-container justify-content-center align-items-center text-center'>
      <button onClick={handleOpenModal} className='m-5 btn btn-outline-dark'>Sign Up Here!</button>
      <RegistrationModal showModal={showModal} setShowModal={setShowModal} />
      <Link to="main" className='link-to-main'>
      <button id='btn-seeregister'className='m-5 btn btn-outline-dark'>See Who Has Registered!</button>
       </Link>
  </div>
  <div className='m-5 carouselContainer d-flex justify-content-center align-items-center'>
    <Carousel />
  </div>

</main>



<Footer/>
  </div>

);
};
  export default MainPage;



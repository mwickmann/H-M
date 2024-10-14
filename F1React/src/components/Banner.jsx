import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css';

const logoPath = "/F1Logo.png"; 

const Banner = () => {
  const navRef = useRef("");
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log(showNavbar)
  }
  return (
    <header>
        <Link to="/">
          <img src={`http://localhost:5187/images/Logo_img/${logoPath}`} className='logo'alt="Formula1 Logo"style={{ width: '200px' }}  /></Link>
      <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/drivers">Drivers</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/races">Races</Link>
          <Link to="/game"> Game</Link>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>

      </button>
    </header>
  );
}

export default Banner;
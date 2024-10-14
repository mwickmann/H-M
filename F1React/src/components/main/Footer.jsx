import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container-footer">
        <p>Formula1 2023 </p>
        <Link to="/">
          <img src={`http://localhost:5187/images/Logo_img/f1logo.png`} className='logo'alt="Formula1 Logo"style={{ width: '200px' }}  /></Link>
        <ul className="footer-links">
          <li><a href="/about">About </a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <p>&copy; Designed & Developed By H&M</p>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
// import logo from "../path/to/your/logo.png"; // Bytt ut med den faktiske stien til logoen din
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css';


// Antar at wwwroot-mappen er tilgjengelig på rotstien i API-prosjektet
const logoPath = "/F1Logo.png"; // Bytt ut med den faktiske filnavnet og formatet til bildet ditt

const Banner = () => {
  return (      
    <header className="banner">
      <nav>
        <Link to="/">
          <img src={`http://localhost:5187/images/Logo_img/${logoPath}`} alt="Formula1 Logo" />
        </Link>
        <div className="container-menu">
             {/* problemer med denne */}
          <Link to="/">Home</Link>
          <Link to="/drivers">Drivers</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/races">Races</Link>
          <Link to="/game"> Game</Link>
        </div>
      </nav>
    </header>
  );
}

export default Banner;

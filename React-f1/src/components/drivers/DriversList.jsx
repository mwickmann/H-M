import React, { useEffect, useState, useContext} from "react";
import DriverService from "../../services/DriverService";
import DriversItem from "./DriversItem";
import { DriversContext } from "../../contexts/DriversContext";
import DriversSearchTeam from "./DriversSearchTeam";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css';


const DriversList = () => {

    const {drivers} = useContext(DriversContext); //henter kun seriene 

    const getDriversJSX = () => {

        //console.log(drivers[0]);

        const driversJSX = drivers.map((_drivers, i) => (
            <DriversItem 
                key={i}
                rank={_drivers.rank}
                points={_drivers.points}
                name={_drivers.name}
                nationality={_drivers.nationality}
                team={_drivers.team}
                imageDriver={`http://localhost:5187/images/Drivers_img/${_drivers.imageDriver}`}
            />
        ));
        return driversJSX;
    }

    return (
        <section>
            <h3 className="search-txt">Drivers</h3>
            <p className="search-txt">Numbers of Professional Drivers: {drivers.length}</p>
            <section className="row g-5">{getDriversJSX()}</section>
        </section>
    )
}

export default DriversList;






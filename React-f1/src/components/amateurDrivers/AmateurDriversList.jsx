import React, { useState, useEffect, useContext } from "react";
import AmateurDriverService from "../../services/AmateurDriverService";
import { AmateurDriverContext } from "../../contexts/AmateurDriverContext";
import AmateurDriversItem from "./AmateurDriversItem";

const AmateurDriversList = () => {

    const {amDrivers} = useContext(AmateurDriverContext); //henter kun en driver

    const getAmateurDriversJSX = () => {
        const amtDrivJSX = amDrivers.map((_amateurDrivers, i) => (
            <AmateurDriversItem
            key={i}
            name={_amateurDrivers.name}
            nationality={_amateurDrivers.nationality}
            manufacture={_amateurDrivers.manufacture}
            team={_amateurDrivers.team}
            image={`http://localhost:5187/images/Amateurdrivers_img/${_amateurDrivers.team}.png`}
            />
        ));
        return amtDrivJSX;
    }
    return (
        <section>
            <h3 className="search-txt">Amateur Drivers</h3>
            <p className="search-txt">Numbers of amDrivers: {amDrivers.length}</p>
            <section className="row g-5">{getAmateurDriversJSX()}</section>
        </section>
    )
};

export default AmateurDriversList;
 
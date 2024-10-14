import React from "react";
import DriversList from "../components/drivers/DriversList";
import { DriversProvider } from "../contexts/DriversContext";
import DriversSearchTeam from "../components/drivers/DriversSearchTeam";
import DriversSearchName from "../components/drivers/DriversSearchName";
import Banner from "../components/Banner";

const DriversPage = () => {
    return (
        <DriversProvider>
            <Banner/>
            <div className="container p-4">
                <DriversSearchTeam />
            </div>
            <div className="container p-4">
                <DriversSearchName />     
            </div>
            <div className="container p-4">
                <DriversList />
            </div>
        </DriversProvider>
        
    );
}

export default DriversPage;

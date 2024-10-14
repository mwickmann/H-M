import AmateurDriversList from "../components/amateurDrivers/AmateurDriversList";
import Banner from "../components/Banner";
import React from "react";
import { AmateurDriverContext } from "../contexts/AmateurDriverContext";
import { AmateurDriverProvider } from "../contexts/AmateurDriverContext";
import AmateurDriverEdit from "../components/amateurDrivers/AmateurDriverEdit";

const AmateurDriversPage = () => {
    return (
            <AmateurDriverProvider>
                <Banner/>
                 <div className="container p-4">
                    <AmateurDriverEdit />
                </div>
                <div className="container p-4">
                    <AmateurDriversList />
                </div>
            </AmateurDriverProvider>
);
}
export default AmateurDriversPage;
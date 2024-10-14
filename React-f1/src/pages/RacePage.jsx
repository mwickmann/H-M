import React from "react";
import Banner from "../components/Banner";
import RacesList from "../components/races/RacesList";
import { RaceProvider } from "../contexts/RacesContext";

const RacesPage = () => {
    return (
        <RaceProvider>
            <Banner/>
            <section>
                <RacesList/>
            </section>
        </RaceProvider>
    );
}

export default RacesPage;

import React from "react";
import Banner from "../components/Banner";
import RacesList from "../components/races/RacesList";
import { RaceProvider } from "../contexts/RacesContext";
import Footer from "../components/main/Footer";

const RacesPage = () => {
    return (
        <RaceProvider>
            <Banner/>
            <section>
                <RacesList/>
            </section>
            <Footer/>
        </RaceProvider>
    );
}

export default RacesPage;

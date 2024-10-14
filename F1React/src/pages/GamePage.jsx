import React from "react";
import Banner from "../components/Banner";
import RaceGame from "../components/game/RaceGame";
import Footer from "../components/main/Footer";


const GamePage = () => {
    return (
         <section>
            <Banner/>
            <RaceGame/>
            <Footer/>
        </section>

    );
}

export default GamePage;

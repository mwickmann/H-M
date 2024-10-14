
import FrontPage from "../components/main/MainPage";

// import React from "react";
import Banner from "../components/Banner";
import RaceGame from "../components/game/RaceGame";
import MainPage from "../components/main/MainPage";

// // import DriversList from "../components/drivers/DriversList";
// // import { DriversProvider } from "../contexts/DriversContext";
// // import DriversSearchTeam from "../components/drivers/DriversSearchTeam";
// // import DriversSearchName from "../components/drivers/DriversSearchName";

const HomePage = () => {
    return (
        <section>
            <Banner/>
            <MainPage/>
        </section>
    )
};

export default HomePage;
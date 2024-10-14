import React from "react";
import Banner from "../components/Banner";
import { TeamsProvider } from "../contexts/TeamsContext";
import TeamsList from "../components/teams/TeamsList";
import TeamsSearchTeamName from "../components/teams/TeamsSearchTeamName";
import Footer from "../components/main/Footer";

const TeamPage = () => {
    return (
        <TeamsProvider>
            <Banner/>
            <div className="container p-4">
                <TeamsSearchTeamName />
            </div>
           
            <div className="container p-4">
                <TeamsList />
            </div>
            <Footer/>
        </TeamsProvider>
    );
}


export default TeamPage;
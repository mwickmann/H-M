import React from "react";
import Banner from "../components/Banner";
import { TeamsProvider } from "../contexts/TeamsContext";
import TeamsList from "../components/teams/TeamsList";
import TeamsSearchTeamName from "../components/teams/TeamsSearchTeamName";

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
        </TeamsProvider>
    );
}


export default TeamPage;
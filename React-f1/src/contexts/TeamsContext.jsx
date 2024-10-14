import { createContext, useEffect, useState } from "react";
import TeamService from "../services/TeamService";

export const TeamsContext = createContext(null);

export const TeamsProvider = ({children}) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        //getDriversFromService();
          setTimeout(()=>{
            getTeamsFromService();
        }, 2000) 
    }, []);

    const getTeamsFromService = () => {
         const fetchDrivers = async () => {
            try {
                const teamFromService = await TeamService.getAllTeams();
                setTeams(teamFromService);
            } catch (error) {
                console.error("TeamsContxt, Error fetching drivers:", error);
            }
        };
        fetchDrivers();
    };

    const getByTeamName = async(teamName) => {
        try{
            const teamByName = await TeamService.getByTeamName(teamName);
            return teamByName;
        }catch {
            console.log("TeamsContxt, Error: getByTeamName TeamsContext");
        }
    }

    return (
        <TeamsContext.Provider value={{teams, getByTeamName}}>
            {children}
        </TeamsContext.Provider>
    )
}
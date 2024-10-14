import axios from "axios";
// import ITeam from "../interfaces/ITeam";

const TeamService = (
    () => {

        const teamsController = "http://localhost:5187/api/teams";

        const getAllTeams = async () => {
    try {
        console.log("Fetching teams from:", teamsController);
        const result = await axios.get(teamsController);
        console.log("Fetched teams successfully:", result.data);
        return result.data;
    } catch (err) {
        console.error("Error fetching teams:", err);
        console.log("No contact with TeamController");
        return [];
    }
       
}

        const getByTeamName = async (teamName) => {
            try{
                const result = await axios.get(`${teamsController}/byTeamName/${teamName}`);
                return result.data;
            }catch(err){
                console.log("No contact with TeamController ByTeamName")
                return [];
            }
        }
        return { getAllTeams, getByTeamName}
    }
    )();

export default TeamService;
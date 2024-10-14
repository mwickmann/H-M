import axios, { AxiosResponse } from "axios";
import ITeam from "../interfaces/ITeam";

const TeamService = (() => {
  const teamsController = "http://localhost:5187/api/teams";

  const getAllTeams = async (): Promise<ITeam[]> => {
    try {
      console.log("Fetching teams from:", teamsController);
      const result: AxiosResponse<ITeam[]> = await axios.get(teamsController);
      console.log("Fetched teams successfully:", result.data);
      return result.data;
    } catch (err: any) {
      console.error("Error fetching teams:", err);
      console.log("No contact with TeamController");
      return [];
    }
  };

  const getByTeamName = async (teamName: string): Promise<ITeam[]> => {
    try {
      const result: AxiosResponse<ITeam[]> = await axios.get(`${teamsController}/byTeamName/${teamName}`);
      return result.data;
    } catch (err: any) {
      console.log("No contact with TeamController ByTeamName");
      return [];
    }
  };

  return { getAllTeams, getByTeamName };
})();

export default TeamService;
import axios, { AxiosResponse } from "axios";
import IDriver from "../interfaces/IDriver";


const DriverService = (() => {
  const driversController = "http://localhost:5187/api/drivers"; 

  const getAllDrivers = async (): Promise<IDriver[]> => {
    try {
      const result: AxiosResponse<IDriver[]> = await axios.get<IDriver[]>(driversController);
      return result.data;
    } catch (err) {
      console.log("Ikke kontakt med DriversController");
      return [];
    }
  };

  const getByName = async (name: string): Promise<IDriver[]> => {
    try {
      const result: AxiosResponse<IDriver[]> = await axios.get<IDriver[]>(`${driversController}/${name}`);
      return result.data;
    } catch (err) {
      console.log("Ikke kontakt med DriversController");
      alert("No drivers found for the specified name.")
      return [];
    }
  };

  const getByTeam = async (team: string): Promise<IDriver[]> => {
    try {
      const result: AxiosResponse<IDriver[]> = await axios.get<IDriver[]>(`${driversController}/byTeam/${team}`);
      return result.data;
    } catch (err) {
      console.log("Ikke kontakt med DriversController");
      alert("No drivers found for the specified team name.")
      return [];
    }
  };

  return { getAllDrivers, getByName, getByTeam };
})();

export default DriverService;
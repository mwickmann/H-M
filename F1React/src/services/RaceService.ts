import axios, { AxiosResponse } from "axios";
import IRace from "../interfaces/IRace";



const RacesService = (() => {
    const racesController = "http://localhost:5187/api/races";

    const getAllRaces = async (): Promise<IRace[]> => {
        try {
            const result: AxiosResponse<IRace[]> = await axios.get<IRace[]>(racesController);
            return result.data;
        } catch (error) {
            console.log("Ikke kontakt med racesController");
            return [];
        }
    };

    const getByName = async (winner: string): Promise<IRace[]> => {
        try {
            const result: AxiosResponse<IRace[]> = await axios.get<IRace[]>(`${racesController}/${winner}`);
            return result.data;
        } catch (error) {
            console.log("Ikke kontakt med racesController");
            return [];
        }
    };

    return { getAllRaces, getByName };
})();

export default RacesService;
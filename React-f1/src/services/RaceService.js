import axios from "axios";
// import IRace from "../interfaces/IRace";

const RacesService = (
    () => {
        const racesController = "http://localhost:5187/api/races";

        const getAllRaces = async () => {
            try{
                const result = await axios.get(racesController);
                return result.data;
            }catch{
                console.log("Ikke kontakt med racesController");
                return [];
            }
        }

        const getByName = async (winner) => {
            try{
                const result = await axios.get(`${racesController}/${winner}`);
                return result.data;
            }catch{
                console.log("Ikke kontakt med racesController");
                return [];
            }
        }

        return { getAllRaces, getByName}

    })();

export default RacesService;
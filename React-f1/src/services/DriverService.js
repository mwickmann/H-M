import axios from "axios";
//import IDriver from "../interfaces/IDriver";


const DriverService = ( 
    () => {
        const driversController = "http://localhost:5170/api/drivers"; //Endepunkt 

        const getAllDrivers = async () => {
            try{
                const result = await axios.get(driversController);
                return result.data;
            }catch(err){
                console.log("Ikke kontakt med DriversController");
                return [];
            }
        }

        const getByName = async (name) => {
            try{
                const result = await axios.get(`${driversController}/${name}`);
                return result.data;
            }catch(err){
                console.log("Ikke kontakt med DriversController");
                return [];
            }
        }

        const getByTeam = async (team) => {
            try{
                const result = await axios.get(`${driversController}/byTeam/${team}`);
                return result.data;
            }catch(err){
                console.log("Ikke kontakt med DriversController");
                return [];
            }
        }

        return { getAllDrivers, getByName, getByTeam}
        
    })();
export default DriverService; 
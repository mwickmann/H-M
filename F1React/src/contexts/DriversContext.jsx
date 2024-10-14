import {createContext, useState, useEffect} from 'react'
import DriverService from '../services/DriverService';

export const DriversContext = createContext(null);

export const DriversProvider = ({children}) => {

   const [drivers, setDrivers] = useState([]);

    useEffect(() => {
          setTimeout(()=>{
            getDriversFromService();
        }, 2000) 
    }, []);

    const getDriversFromService = () => {
        const fetchDrivers = async () => {
            try {
                const driverFromService = await DriverService.getAllDrivers();
                setDrivers(driverFromService);
            } catch (error) {
                console.error("Error fetching drivers:", error);
            }
        };
        fetchDrivers();
    };

    const getByName = async(name) => { //sender id til mediaService
        try{
            const driverByName = await DriverService.getByName(name); 
            return driverByName;
        } catch {
            console.log("Error: getByName: DriversContext");
        }
    }
    const getByTeam = async(team) => { //sender id til mediaService
        try{
            const driverByTeam = await DriverService.getByTeam(team); 
            return driverByTeam;
        } catch {
            console.log("Error: getByTeam: DriversContext");
        }
    }
    return (
        <DriversContext.Provider value={{drivers, getByName, getByTeam}}>
            {children}
        </DriversContext.Provider>
    )
}

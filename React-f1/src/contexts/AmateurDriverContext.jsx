import React, { useState, useEffect, createContext } from "react";
import AmateurDriverService from "../services/AmateurDriverService";

export const AmateurDriverContext = createContext(null);

export const AmateurDriverProvider = ({ children }) => {
  const [amDrivers, setAmDrivers] = useState([]);
  const mainController = "http://localhost:5187/api/main";

  useEffect(() => {
    getAmateurDriversFromService();
  }, []);

  const getAmateurDriversFromService = () => {
    const fetchAmateurDrivers = async () => {
      try {
        const amateurDriversService = await AmateurDriverService.getAllAmateurDrivers();
        setAmDrivers(amateurDriversService);
      } catch (error) {
        console.error("Error fetching amateur drivers:", error);
      }
    };
    fetchAmateurDrivers();
  };

  const editAmateurDriver = async (amateurDriverToUpdate) => {
    try {
      await AmateurDriverService.putAmateurDriver(amateurDriverToUpdate.id, amateurDriverToUpdate);
      getAmateurDriversFromService();
    } catch (error) {
      console.error("Error editing amateur driver:", error);
    }
  }

  const getById = async (id) => {
    try {
      const amateurDriverToUpdate = await AmateurDriverService.getById(id);
      return amateurDriverToUpdate;
    } catch {
      console.log("Error: getById: AmateurDriversContext");
    }
  }

  const getByAmateurName = async (name) => {
    try {
      const amateurDriverByName = await AmateurDriverService.getByName(name);
      return amateurDriverByName;
    } catch {
      console.log("Error: getByName: AmateurDriversContext");
    }
  }

  const putAmateurDriver = async (id, amateurDriverToUpdate) => {
    try {
      await AmateurDriverService.putAmateurDriver(id, amateurDriverToUpdate);
      getAmateurDriversFromService();
    } catch (error) {
      console.error("Error putting amateur driver:", error);
    }
  }

  return (
    <AmateurDriverContext.Provider value={{ amDrivers, getById, getByAmateurName, editAmateurDriver, putAmateurDriver }}>
      {children}
    </AmateurDriverContext.Provider>
  )
}

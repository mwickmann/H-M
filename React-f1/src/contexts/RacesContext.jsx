import React, { createContext, useEffect, useState } from "react";
import RacesService from "../services/RaceService";

export const RacesContext = createContext(null);

export const RaceProvider = ({ children }) => {
  const [races, setRaces] = useState([]);
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    getRacesFromService();
  }, []);

  const getRacesFromService = async () => {
    const fetchRaces = async () => {
      try {
        const racesFromService = await RacesService.getAllRaces();
        setRaces(racesFromService);
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    };
    fetchRaces();
  };

  // bruker trykker på en knapp for å få opp descending order på date - nyeste datoen kommer øverst
  const sortRacesByDate = () => {
    const sorted = [...races];
    sorted.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
    });
    setRaces(sorted);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <RacesContext.Provider value={{ races, sortRacesByDate }}>
      {children}
    </RacesContext.Provider>
  );
};


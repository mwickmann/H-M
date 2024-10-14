const RacesModule = ( () => { 

    const endpointsRaces = [
        {
          header: "Get All",
          url: "https:://localhost:5170/api/races",
          image: "allraces.png",
          description: "Henter ut alle løp sesong 2023. Sist oppdatert: 5/11-2023. Totalt 20 verdier."
        },
      ];
    
      const getAll = () => {
        return structuredClone ( endpointsRaces )
      }
      return {
        getAll
      }
    }) ();
    export default RacesModule;
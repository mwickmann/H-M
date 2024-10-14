
const TeamsModule = ( () => { 

    const endpointsTeams = [
        {
          header: "Get All",
          url: "https:://localhost:5187/api/teams",
          image: "allteams.png",
          description: "Henter ut alle teams i databasen ved å bruke /teams som endepunktet. Totalt 10 stk i default."
        },
        {
          header: "Get By TeamName",
          url: "http://localhost:5187/api/Teams/byTeamName/McLaren",
          image: "byteamname.png",
          description: "Lister ut etter TeamName ved å for eksempel bruke /byTeamName/McLaren som parameter."
        },
      ];
    
      const getAll = () => {
        return structuredClone ( endpointsTeams )
      }
      return {
        getAll
      }
    }) ();
    export default TeamsModule;
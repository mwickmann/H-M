const DriversModule = ( () => { 

const endpointsDrivers = [
    {
      header: "Get All",
      url: "https:://localhost:5187/api/drivers",
      image: "alldrivers.png",
      description: "Henter ut alle sjåfører i databasen ved å bruke /drivers endepunktet. Totalt 22 stk i default."
    },
    {
      header: "Get By Name",
      url: "http://localhost:5187/api/Drivers/Max%20Verstappen",
      image: "srchname.png",
      description: "Henter ut en enkelt sjåfør basert på navn i databasen ved å bruke /Name som parameter."
    },
    {
      header: "Get By Team",
      url: "http://localhost:5187/api/Drivers/byTeam/Ferrari",
      image: "srchteam.png",
      description: "Henter ut flere sjåfører som tilhører samme team ved å bruke /byTeam/Teamnavn."
    }
  ];

  const getAll = () => {
    return structuredClone ( endpointsDrivers )
  }
  return {
    getAll
  }
}) ();
export default DriversModule;
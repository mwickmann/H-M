const AmateurDriversModule = ( () => { 

    const endpointsADrivers = [
        {
          header: "Get All",
          url: "https:://localhost:5187/api/main",
          image: "defaultamateurdriver.png",
          description: "Henter ut alle publikums-sjåfører i databasen. Totalt 1 stk i default."
        },
        {
          header: "Register As A New Driver",
          url: "http://localhost:5187/api/main",
          image: "postnewdriver.png",
          description: "POST. Legger til ny sjåfør i databasen."
        },
        {
          header: "Change Your Driver",
          url: "http://localhost:5187/api/main",
          image: "putamateurdriver.png",
          description: "PUT. Endrer på en sjåfør som er lagt til i databasen."
        }, {
          header: "Get By Id",
          url: "http://localhost:5187/api/main/id1",
          image: "getbyid.png",
          description: "GET. Lar deg søke etter publikums-sjåfører ved å for eksempel bruke id/1 som parameter "
        },  {
        header: "Image Uploader",
        url: "http://localhost:5187/api/ImageUploader",
        image: "imageupload.png",
        description: "POST & GET. Lar deg poste et bilde til databasen, og henter det ut."
         },  
        
        {
        header: "Delete by name",
        url: "http://localhost:5187/api/main",
        image: "deleteByName.jpg ",
        description: "DELETE. Lar deg slette en publikum sjåfør fra databasen."
        }

      ];
    
      const getAll = () => {
        return structuredClone ( endpointsADrivers )
      }
      return {
        getAll
      }
    }) ();
    export default AmateurDriversModule;
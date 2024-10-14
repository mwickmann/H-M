
//Ansvar for kjøring og henting av endepunkter
import axios from "axios";

const MediaService = (()=>{

    // endepunktene, en controller betyr minimun et endepunkt. 
    const driversController = "http://localhost:5124/api/driver";
    const amateureDriversController = "http://localhost:5124/api/amateurDriver";
    const racesController = "http://localhost:5124/api/race";
    const teamsController = "http://localhost:5124/api/team";
    const imageUploadController = "http://localhost:5124/api/imageUpload"



    const getAllDrivers = async() => {
        const result = await axios.get(driversController);
        return result.data;
    }

    const postSeries = async (newDriver, image) => { // to parametere: serien(objekt) + bildefil
        /*
        1. post til Apiet: tittel og ?
        2. psote selve bildet
        3. for å få lov for controlleren å ta imot en I? File -> pakke inn bildet i et type objekt (JavaScrips?FormObject) */
        const result = await axios.post(driversController, newDriver); //to argumenter når kjører post: 1. utføre lagring av db, 2. hva skal seriecontrolleren lagre (Js object med den nye serien)

        // 1. Pakker inn bildet --> blir en IForm File
        const formData = new FormData();

        // 2. Putte inn bildet i IForm Objektet
        formData.append("formFile", image); //formFile må være den samme som i Controlleren (Image)

        // 3. sende bildet til webapiet
        const uploadResult = await axios({
            url: imageUploadController, // endepunktet
            method: "POST", //string verdi; POST, GET ectc..
            data: formData, //formData: er hvilke data som skal overføres
            headers: {"Content-Type": "multipart/form.data"}// Har ansvar for: hva den tingen er som hva man prøver å sende over .allow anny headers i CORS figurasjonen påvirker om dette går eller ikke

        }); 

        //HUSK DENNE!
        formData.delete("formFile");

        return result.data;
    }

    return {
        getAll,
        postDrivers
    }

})();

export default MediaService;
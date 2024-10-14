
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

    const postSeries = async (newDriver, image) => { 
       
        const result = await axios.post(driversController, newDriver); 
        const formData = new FormData();
        formData.append("formFile", image); 

        const uploadResult = await axios({
            url: imageUploadController,
            method: "POST", 
            data: formData, 
            headers: {"Content-Type": "multipart/form.data"}
        }); 

        formData.delete("formFile");
        return result.data;
    }
    return {
        getAll,
        postDrivers
    }

})();

export default MediaService;
import axios, { AxiosResponse } from "axios";

interface AmateurDriver {
  // Definer feltene for AmateurDriver-objektet her
  id: number;
  name: string;
  nationality: string;
  manufacturer: string;
  team: string;
  // Legg til andre felt etter behov
}

const AmateurDriverService = (() => {
  const mainController = "http://localhost:5187/api/main";
  const imageUploadController = "http://localhost:5187/api/imageupload";
  const imageUrl = "http://localhost:5187/images/Amateurdrivers_img";

  const getById = async (id: number): Promise<AmateurDriver | undefined> => {
    try {
      const result: AxiosResponse<AmateurDriver> = await axios.get(`${mainController}/id${id}`);
      return result.data;
    } catch (err) {
      console.log("Problem i AmateurDrivererService", err);
      return undefined;
    }
  };

  const getAllAmateurDrivers = async (): Promise<AmateurDriver[]> => {
    const result: AxiosResponse<AmateurDriver[]> = await axios.get(mainController);
    return result.data;
  };

  const getByName = async (name: string): Promise<AmateurDriver | undefined> => {
    const result: AxiosResponse<AmateurDriver> = await axios.get(`${mainController}/${name}`);
    return result.data;
  };

  const putAmateurDriver = async (amateurDriverToUpdate: AmateurDriver): Promise<{ putAmDriverResult: AmateurDriver }> => {
    try {
      const result: AxiosResponse<AmateurDriver> = await axios.put(mainController, amateurDriverToUpdate);
      alert("Endret Amateur Driver!");
      console.log("Put AmateurDriver result:", result.data);

      return { putAmDriverResult: result.data };
    } catch (error) {
      console.log("Error editing AmateurDriver", error);
      throw error;
    }
  };

  const postAmateurDriver = async (newAmateurDriver: AmateurDriver, image: File): Promise<void> => {
    try {
      const formData = new FormData();
      formData.append("file", image);

      const result: AxiosResponse<AmateurDriver> = await axios.post(`${mainController}/`, newAmateurDriver);

      const resultImageUpload = await axios({
        url: imageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      formData.delete("file");
      alert("Amateur Driver is created!");
      console.log("AmateurDriver created successfully:", result);
    } catch (error) {
      console.log("Error creating AmateurDriver in AmateurService", error);
      throw error;
    }
  };

  const getImageUrl = (): string => {
    return imageUrl;
  };

  const getAmDriverByName = async (name: string): Promise<AmateurDriver | undefined> => {
    try {
      const result: AxiosResponse<AmateurDriver> = await axios.get(`${mainController}/${name}`);
      return result.data;
    } catch (error) {
      console.log("Ikke kontakt med MainController");
      return undefined;
    }
  };

  const deleteAmateurDriver = async (name: string): Promise<boolean> => {
    try {
      const result: AxiosResponse<void> = await axios.delete(`${mainController}/${name}`);
      alert("Amateur Driver is deleted");
      console.log(result);
      return true; 
    } catch (error) {
      alert("Finner ikke Amateur Driver med dette navnet!");
      console.log(error, "Ikke kontakt med SeriesController fra AmateurService");
      return false; 
    }
  };

  return {
    getById,
    getAllAmateurDrivers,
    getByName,
    deleteAmateurDriver,
    putAmateurDriver,
    getAmDriverByName,
    postAmateurDriver,
    getImageUrl,
  };
})();

export default AmateurDriverService;

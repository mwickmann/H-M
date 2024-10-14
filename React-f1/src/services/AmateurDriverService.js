import axios from "axios";

const AmateurDriverService = (() => {
  const mainController = "http://localhost:5187/api/main";

  const getById = async (id) => {
    const result = await axios.get(`${mainController}/${id}`);
    return result.data;
  }

  const getAllAmateurDrivers = async () => {
    const result = await axios.get(mainController);
    return result.data;
  }

  const getByName = async (name) => {
    const result = await axios.get(`${mainController}/${name}`);
    return result.data;
  }

  const deleteAmateurDriver = async (name) => {
    const result = await axios.delete(`${mainController}/${name}`);
    console.log(result);
  }

    const putAmateurDriver = async (id, amateurDriverToUpdate) => {
        try {
            const result = await axios.put(`http://localhost:5187/api/main/${id}`, amateurDriverToUpdate, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const putAmDriverResult = result.data;
            console.log(result);

            return { putAmDriverResult };
        } catch (error) {
            console.log("Error editing AmateurDriver", error);
            throw error;
        }
    }



  return { getById, getAllAmateurDrivers, getByName, deleteAmateurDriver, putAmateurDriver }
})();
export default AmateurDriverService;

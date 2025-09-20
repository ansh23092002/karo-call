
import axios from "axios";

const BASE_URL = "https://karocallservices.com/api";

const MakeRequest = async (endpoint,method,data={}) => {
    const url = `${BASE_URL}${endpoint}`;
    if (method === 'GET') {
        try{
            const response = await axios.get(url);
            return response.data;
        }catch(error){
            console.error("Error fetching data:", error);
            throw error;
        }
    } else {
        try{
            const response = await axios.post(url, data);
            return response.data;
        }catch(error){
            console.error("Error posting data:", error);
            throw error;
        }
    }
};

export default MakeRequest;
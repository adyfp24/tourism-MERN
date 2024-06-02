import axios from "axios"
import apiHelper from "../utils/apiHelper"

export const getAllService = async () => {
    try {
        const response = await axios.get(`${apiHelper.baseUrl}/blog`);
        return response.data.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('get all blog failed');
    }
}

export const getByIdService = () => {

}

export const createService = () => {

}
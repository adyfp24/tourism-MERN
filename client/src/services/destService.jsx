import axios from 'axios';
import apiHelper from '../utils/apiHelper';

export const getAllService = async () => {
    try {
        const response = await axios.get(`${apiHelper.baseUrl}/destinasi`);
        return response.data.data
    } catch (error) {
        throw error.response ? error.response.data : new Error('get destination failed');
    }
};

export const getByIdService = async () => {
    
};

export const addService = async () => {

};

export const updateService = async () => {

};

export const deleteService = async () => {

};
import axios from 'axios';
import apiHelper from '../utils/apiHelper';

export const registService = async (userData) => {
  try {
    const response = await axios.post(`${apiHelper.baseUrl}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Registration failed');
  }
};

export const loginService = async (userData) => {
  const response = await axios.post(`${apiHelper.baseUrl}/login`, userData);
  return response.data;
};

export const logoutService = async () => {
  const response = await axios.post(`${apiHelper.baseUrl}/logout`);
  return response.data
};


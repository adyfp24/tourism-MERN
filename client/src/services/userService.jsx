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
  try {
    const response = await axios.post(`${apiHelper.baseUrl}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }
};

export const logoutService = async () => {
  try {
    const response = await axios.post(`${apiHelper.baseUrl}/logout`);
    return response.data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Logout failed');
  }
};

export const getProfileService = async (token) => {
  try {
    const response = await axios.get(`${apiHelper.baseUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },);
    return response.data.data
  } catch (error) {
    throw error.response ? error.response.data : new Error('get profile failed');
  }
}


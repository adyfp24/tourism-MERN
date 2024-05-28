import { useState, useEffect } from 'react';
import {loginService, registService, logoutService } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const registeredUser = await registService(userData);
      setUser(registeredUser);
      navigate('/login');
    } catch (err) {
      setError(err.response ? err.response.data : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const loggedInUser = await loginService(userData);
      setUser(loggedInUser.data);
      console.log(loggedInUser.data);
      const token = loggedInUser.access_token;
      localStorage.setItem('token', token);
      setToken(token);
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false)
    }
  }

  const logout =  () => {
    // await logoutService();
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (user) {
      console.log(user); 
      navigate('/');
    }
  }, [user, navigate]);

  return { user, loading, error, token, register, login, logout };
};

export default useAuth;

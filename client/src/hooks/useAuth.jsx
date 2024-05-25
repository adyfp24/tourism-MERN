import { useState } from 'react';
import {loginService, registService, logoutService } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
      setUser(loggedInUser);
    } catch (error) {
      setError(err.response ? err.response.data : 'Login failed');
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    logoutService();
    setUser(null);
  }

  return { user, loading, error, register, login, logout };
};

export default useAuth;

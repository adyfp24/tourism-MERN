import { useState } from 'react';
import { registerUser } from '../services/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const registeredUser = await registerUser(userData);
      setUser(registeredUser);
    } catch (err) {
      setError(err.response ? err.response.data : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData) => {

  }

  const logout = async () => {

  }

  return { user, loading, error, register, login, logout };
};

export default useAuth;

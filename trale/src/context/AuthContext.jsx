import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const register = async ({ name, username, password }) => {
    const response = await axios.post('/api/auth/register', {
      name,
      username,
      password,
    });
    setUser(response.data.user);
  };

  const login = async ({ username, password }) => {
    const response = await axios.post('/api/auth/login', { username, password });
    setUser(response.data.user);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

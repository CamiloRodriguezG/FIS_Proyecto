// src\components\Autenticacion.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar el estado de autenticación y el rol del usuario desde localStorage
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedRole = localStorage.getItem('userRole');

    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUserRole(storedRole);
    }
  }, []);

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('isAuthenticated', true); // Guardar en localStorage
    localStorage.setItem('userRole', role); // Guardar el rol del usuario

    // Redirigir según el rol
    if (role === 'admin') {
      navigate('/Admin');
    } else if (role === 'cliente') {
      navigate('/PerfilUsuarioCliente');
    } else if (role === 'artista') {
      navigate('/PerfilUsuarioArtista');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('isAuthenticated'); // Eliminar del localStorage
    localStorage.removeItem('userRole'); // Eliminar el rol del localStorage
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

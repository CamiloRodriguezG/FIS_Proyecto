// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Catalogo from './components/Catalogo';
import Contacto from './components/Contacto';
import IniciarSesion from './components/IniciarSesion';
import Registrarse from './components/Registrarse';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import ProtectedRoute from './components/Proteccion_rutas'; // Importa ProtectedRoute
import Admin from './components/Admin'; // Importa el componente Admin
import Autenticacion from './components/Autenticacion'; // Importa el componente Autenticacion
import PerfilUsuarioCliente from './components/PerfilUsuarioCliente'; // Componente Cliente
import PerfilUsuarioArtista from './components/PerfilUsuarioArtista'; // Componente Artista

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/Contacto" element={<Contacto />} />

          {/* Ruta protegida para el admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Rutas para los perfiles de cliente y artista */}
          <Route path="/PerfilUsuarioCliente" element={<PerfilUsuarioCliente />} />
          <Route path="/PerfilUsuarioArtista" element={<PerfilUsuarioArtista />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

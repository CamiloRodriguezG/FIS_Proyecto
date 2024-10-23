import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Catalogo from './components/Catalogo';
import Contacto from './components/Contacto'; // Importa el nuevo componente
import IniciarSesion from './components/IniciarSesion';
import Registrarse from './components/Registrarse';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la Tienda de Camisetas</h1>} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Contacto" element={<Contacto />} /> {/* Ruta de contacto */}
          <Route path="/Iniciar-sesion" element={<IniciarSesion />} /> 
          <Route path="/Registrarse" element={<Registrarse />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Catalogo from './components/Catalogo';
import Contacto from './components/Contacto'; // Importa el nuevo componente
import IniciarSesion from './components/IniciarSesion';
import Footer from './components/Footer';
import Admin from './components/Admin';

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
          <Route path="/Administrador" element={<Admin />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

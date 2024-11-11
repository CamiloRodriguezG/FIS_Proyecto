import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Catalogo from './Catalogo';
import Contacto from './Contacto';
import IniciarSesion from './IniciarSesion';
import Registrarse from './Registrarse';


const Customization = () => {
    return (
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
    );
};

export default Customization;
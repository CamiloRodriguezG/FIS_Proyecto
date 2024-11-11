// src/components/Header.js
import React from 'react';
import './Header.css'; // Importar el CSS para el encabezado
import LogoImg from '../Imagenes/Logo.png'; // Asegúrate de que la ruta sea correcta

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        {/* Aquí se coloca el logo como una imagen */}
        <img src={LogoImg} alt="Logo" className="logo-img" />
      </div>
      <nav className="Header-nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/Catalogo">Catálogo</a></li>
          <li><a href="/Contacto">Contáctanos</a></li>
          <li><a href="/Iniciar-sesion">Iniciar Sesión</a></li>
          <li><a href="/Administrador">Administrador</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

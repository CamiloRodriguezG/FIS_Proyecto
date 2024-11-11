// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../Imagenes/Logo_2.png';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Más información</h4>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Equipo dev</a></li>
            <li><a href="#">Visión y trayecto</a></li>
            <li><a href="#">Afiliados</a></li>
            <li><a href="#">Opiniones</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">PQRS</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Explora</h4>
          <ul>
            <li><a href="#">Aviso legal</a></li>
            <li><a href="#">Términos de uso</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Política de cookies</a></li>
            <li><a href="#">Nuestras sucursales</a></li>
            <li><a href="#">Soporte técnico</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Colores</a></li>
            <li><a href="#">Desarrolladores</a></li>
            <li><a href="#">Librería de recursos</a></li>
          </ul>
        </div>
      </div>
      <div className="social-icons">
        <SocialIcon url="https://www.instagram.com" target="_blank" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.youtube.com" target="_blank" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.linkedin.com" target="_blank" style={{ height: 35, width: 35 }} />
      </div>
    </footer>
  );
};

export default Footer;


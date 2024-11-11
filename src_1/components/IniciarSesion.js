import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IniciarSesion.css';

const IniciarSesion = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hook para la navegación
  const navigate = useNavigate();

  // Manejo del cambio entre Iniciar Sesión y Registrarse
  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };

  // Manejo de formulario de inicio de sesión
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (email === 'a@a.com' && password === '123') {
      alert('Inicio de sesión exitoso');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className={`container ${toggleForm ? 'toggle' : ''}`}>
      <div className="container-form">
        {/* Formulario de Iniciar Sesión */}
        <form className="sign-in" onSubmit={handleSignInSubmit}>
          <h2>Iniciar Sesión</h2>
          <span><strong>Use su correo y contraseña</strong></span>
          <div className="container-input">
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="container-input">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">Iniciar Sesión</button>
        </form>
      </div>

      {/* Formulario de Registro */}
      <div className="container-form">
        <form className="sign-up">
          <h2>Registrarse</h2>
          <span><strong>Use su correo electrónico para registrarse</strong></span>
          <div className="container-input">
            <ion-icon name="person-outline"></ion-icon>
            <input type="text" placeholder="Nombre" required />
          </div>
          <div className="container-input">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="container-input">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="button" className="button">Registrarse</button>
        </form>
      </div>

      {/* Sección de bienvenida con botones para alternar */}
      <div className="container-welcome">
        <div className="welcome-sign-up welcome">
          <h3>Bienvenido</h3>
          <p>Si aún no tiene una cuenta registrese para acceder a todas las funciones del sitio</p>
          <button className="button" onClick={handleToggle}>
            Registrarse
          </button>
        </div>
        <div className="welcome-sign-in welcome">
          <h3>Bienvenido</h3>
          <p>Si ya tiene una cuenta, inicie sesión para acceder a todas las funciones del sitio</p>
          <button className="button" onClick={handleToggle}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;

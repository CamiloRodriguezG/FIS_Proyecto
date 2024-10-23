// src/components/Registrarse.js
import React, { useState } from 'react';

const Registrarse = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podrías agregar validaciones más complejas o integración con el backend
    if (nombre && email && password) {
      setMensaje('¡Registro exitoso!');
      setError('');
      // Resetea los campos o realiza la acción posterior que desees
      setNombre('');
      setEmail('');
      setPassword('');
    } else {
      setError('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="registro-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error">{error}</p>}
        {mensaje && <p className="success">{mensaje}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registrarse;

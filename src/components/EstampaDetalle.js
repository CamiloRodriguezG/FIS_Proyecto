// EstampaDetalle.js
import React, { useState } from 'react';
import './EstampaDetalle.css'; // Importa el archivo CSS

const EstampaDetalle = ({ estampa, onClose }) => {
  const [color, setColor] = useState('blanco');
  const [talla, setTalla] = useState('M');

  const handleCompra = () => {
    alert(`Comprando camiseta de color ${color} y talla ${talla}`);
  };

  return (
    <div className="estampa-detalle">
      <button onClick={onClose}>Cerrar</button>
      <h2>{estampa.nombre}</h2>
      <img src={estampa.imagen} alt={estampa.nombre} />
      <p>Precio: ${estampa.precio}</p>
      <p>{estampa.descripcion}</p>

      <label>
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="blanco">Blanco</option>
          <option value="negro">Negro</option>
          <option value="rojo">Rojo</option>
          <option value="azul">Azul</option>
        </select>
      </label>

      <label>
        Talla:
        <select value={talla} onChange={(e) => setTalla(e.target.value)}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </label>

      <button onClick={handleCompra}>Comprar</button>
    </div>
  );
};

export default EstampaDetalle;

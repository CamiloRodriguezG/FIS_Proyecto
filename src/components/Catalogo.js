//Catalogo.js
import React, { useState } from 'react';
import EstampaDetalle from './EstampaDetalle'; 
import DragonImg from '../Imagenes/Dragon.jpg';
import TigreImg from '../Imagenes/Tigre.jpg';
import LoboImg from '../Imagenes/Lobo.jpg';
import './Catalogo.css'; // Asegúrate de importar el CSS

const Catalogo = () => {
  const [estampas] = useState([
    { id: 1, nombre: 'Estampa Dragón', precio: 50000, imagen: DragonImg, descripcion: 'Descripción de la estampa dragón.', disponibilidad: 500 },
    { id: 2, nombre: 'Estampa Tigre', precio: 60000, imagen: TigreImg, descripcion: 'Descripción de la estampa tigre.', disponibilidad: 300 },
    { id: 3, nombre: 'Estampa Lobo', precio: 48000, imagen: LoboImg, descripcion: 'Descripción de la estampa lobo.', disponibilidad: 800 },
  ]);
  
  const [estampaSeleccionada, setEstampaSeleccionada] = useState(null);

  const handleSeleccionarEstampa = (estampa) => {
    setEstampaSeleccionada(estampa);
  };

  const handleCerrarDetalle = () => {
    setEstampaSeleccionada(null);
  };

  return (
    <div>
      {estampaSeleccionada ? (
        <EstampaDetalle estampa={estampaSeleccionada} onClose={handleCerrarDetalle} />
      ) : (
        <div>
          <h1>Catalógo de Estampas</h1>
          <div className="catalogo">
            {estampas.map((estampa) => (
              <div className="catalogo-item" key={estampa.id} onClick={() => handleSeleccionarEstampa(estampa)}>
                <img src={estampa.imagen} alt={estampa.nombre} className="catalogo-imagen" />
                <h2 className="catalogo-titulo">{estampa.nombre}</h2>
                {/* El "tolocalstring" es para visualizar las unidades y se pueda leer mejor el precio*/}
                <p className="catalogo-precio">Precio: ${estampa.precio.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;
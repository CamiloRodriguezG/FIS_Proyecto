// src/tests/Catalogo.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Catalogo from '../components/Catalogo';

jest.mock('../components/EstampaDetalle', () => {
  return ({ estampa, onClose }) => (
    <div>
      <h2>{estampa.nombre}</h2>
      <p>{estampa.descripcion}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
});

describe('Componente Catalogo', () => {
  test('debería renderizar las estampas correctamente', () => {
    render(<Catalogo />);

    // Verificar que los elementos del catálogo están presentes
    const estampa1 = screen.getByText(/Estampa Dragón/i);
    const estampa2 = screen.getByText(/Estampa Tigre/i);
    const estampa3 = screen.getByText(/Estampa Lobo/i);

    expect(estampa1).toBeInTheDocument();
    expect(estampa2).toBeInTheDocument();
    expect(estampa3).toBeInTheDocument();
  });

  test('debería mostrar el detalle de la estampa al hacer clic', () => {
    render(<Catalogo />);

    // Hacer clic en la estampa "Estampa Dragón"
    const estampaDragon = screen.getByText(/Estampa Dragón/i);
    fireEvent.click(estampaDragon);

    // Verificar que el componente EstampaDetalle se muestra
    const [detalleTitulo] = screen.getAllByText(/Estampa Dragón/i);
    const detalleDescripcion = screen.getByText(/Descripción de la estampa dragón/i);

    expect(detalleTitulo).toBeInTheDocument();
    expect(detalleDescripcion).toBeInTheDocument();
  });

  test('debería cerrar el detalle de la estampa y volver al catálogo', () => {
    render(<Catalogo />);

    // Hacer clic en la estampa "Estampa Dragón"
    const estampaDragon = screen.getByText(/Estampa Dragón/i);
    fireEvent.click(estampaDragon);

    // Verificar que el detalle de la estampa se muestra
    const [detalleTitulo] = screen.getAllByText(/Estampa Dragón/i);
    expect(detalleTitulo).toBeInTheDocument();

    // Hacer clic en el botón "Cerrar" para cerrar el detalle
    const botonCerrar = screen.getByText(/Cerrar/i);
    fireEvent.click(botonCerrar);

    // Verificar que el catálogo vuelva a ser visible
    const catalogoTitulo = screen.getByText(/Catalógo de Estampas/i);
    expect(catalogoTitulo).toBeInTheDocument();
  });
});

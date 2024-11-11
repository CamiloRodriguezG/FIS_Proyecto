import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Importa tu AuthContext
import ProtectedRoute from './ProtectedRoute'; // Componente de ruta protegida
import Admin from './Admin'; // Componente de Admin
import IniciarSesion from './IniciarSesion'; // Componente de inicio de sesión

test('No permite acceso a ruta protegida si no está autenticado', () => {
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <AuthProvider> {/* Proporciona contexto de autenticación vacío */}
        <Routes>
          <Route path="/Iniciar-sesion" element={<IniciarSesion />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  );
  
  // Verifica que se redirige al inicio de sesión
  expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
});

// src/tests/App.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider } from '../components/Autenticacion';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('Test de rutas protegidas y autenticación', () => {
  test('debería redirigir a Iniciar sesión si el usuario no está autenticado al intentar acceder a /admin', async () => {
    // Renderizar el componente App con el AuthProvider y el Router
    render(
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    );

    // Intentar acceder a la ruta protegida /admin
    fireEvent.click(screen.getByText('Admin')); // Suponiendo que tienes un link con texto 'Admin'

    // Esperar a que redirija y que la página de 'Iniciar sesión' aparezca
    await waitFor(() => expect(screen.getByText('Iniciar sesión')).toBeInTheDocument());
  });

  test('debería permitir acceder a /admin si el usuario está autenticado', async () => {
    // Mockear la autenticación
    const mockAuthContext = {
      isAuthenticated: true,
      userRole: 'admin', // Simulamos que el usuario es admin
      login: jest.fn(),
      logout: jest.fn(),
    };

    // Renderizar el componente App con el AuthProvider y el Router
    render(
      <Router>
        <AuthProvider value={mockAuthContext}>
          <App />
        </AuthProvider>
      </Router>
    );

    // Intentar acceder a la ruta protegida /admin
    fireEvent.click(screen.getByText('Admin')); // Suponiendo que tienes un link con texto 'Admin'

    // Verificar que el contenido del admin esté presente
    await waitFor(() => expect(screen.getByText('Bienvenido, Admin')).toBeInTheDocument()); // O algún contenido que se espera en el admin
  });

  test('debería redirigir a /Catalogo si el usuario está autenticado al intentar acceder a /admin y luego hace logout', async () => {
    // Mockear la autenticación
    const mockAuthContext = {
      isAuthenticated: true,
      userRole: 'admin', // Simulamos que el usuario es admin
      login: jest.fn(),
      logout: jest.fn(() => {
        mockAuthContext.isAuthenticated = false; // Simula el logout
      }),
    };

    // Renderizar el componente App con el AuthProvider y el Router
    render(
      <Router>
        <AuthProvider value={mockAuthContext}>
          <App />
        </AuthProvider>
      </Router>
    );

    // Intentar acceder a la ruta protegida /admin
    fireEvent.click(screen.getByText('Admin')); // Suponiendo que tienes un link con texto 'Admin'

    // Hacer logout
    fireEvent.click(screen.getByText('Logout')); // Suponiendo que tienes un link de logout

    // Verificar que el usuario ha sido redirigido al catálogo
    await waitFor(() => expect(screen.getByText('Catalogo')).toBeInTheDocument());
  });
});

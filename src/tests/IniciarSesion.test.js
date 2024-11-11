import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import IniciarSesion from '../components/IniciarSesion'; // Ajusta la ruta correctamente
import { AuthProvider } from '../components/Autenticacion';
import { MemoryRouter } from 'react-router-dom';

describe('IniciarSesion Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter> {/* Envuelve tu componente con MemoryRouter */}
        <AuthProvider>
          <IniciarSesion />
        </AuthProvider>
      </MemoryRouter>
    );
  });

  test('renders Iniciar Sesión and Registrarse forms correctly', async () => {
    await waitFor(() => {
      const iniciarSesionButtons = screen.getAllByText(/Iniciar Sesión/i);
      const registrarseButtons = screen.getAllByText(/Registrarse/i);

      expect(iniciarSesionButtons.length).toBeGreaterThan(0); // Asegúrate de que se renderiza al menos uno
      expect(registrarseButtons.length).toBeGreaterThan(0); // Asegúrate de que se renderiza al menos uno
    });
  });

  test('toggles between Iniciar Sesión and Registrarse forms', () => {
    const buttons = screen.getAllByRole('button', { name: /Registrarse/i });

    expect(buttons.length).toBeGreaterThan(0); // Asegúrate de que se encuentra al menos uno

    const toggleButton = buttons[0]; // Selecciona el primer botón de la lista
    fireEvent.click(toggleButton);

    expect(screen.getByText(/Use su correo electrónico para registrarse/i)).toBeInTheDocument();
  });

  test('displays error for invalid login credentials', async () => {
    // Ajusta el data-testid para que coincida con el campo de email en el formulario de iniciar sesión
    fireEvent.change(screen.getByTestId('email-input-login'), { target: { value: 'invalid@gmail.com' } });
    fireEvent.change(screen.getByTestId('password-input-login'), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByText(/Iniciar Sesión/i));  // Selecciona el botón por el texto


    await waitFor(() => {
      expect(screen.getByText(/Correo o contraseña incorrectos/i)).toBeInTheDocument();
    });
  });

  test('validates registration form with error messages for invalid input', () => {
    // Cambia el formulario a "Registrarse" antes de comenzar
    const toggleButton = screen.getByRole('button', { name: /Registrarse/i });
    fireEvent.click(toggleButton);

    fireEvent.change(screen.getByTestId('nombre-input'), { target: { value: 'A' } });
    fireEvent.change(screen.getByTestId('nickname-input'), { target: { value: 'N' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'pass' } });
    fireEvent.change(screen.getByTestId('confirmPassword-input'), { target: { value: 'pass' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByTestId('celular-input'), { target: { value: '123' } });
    fireEvent.change(screen.getByTestId('direccion-input'), { target: { value: '' } });

    fireEvent.click(screen.getByTestId('registro-button'));

    // Verifica los mensajes de error
    expect(screen.getByText(/Nombre inválido/i)).toBeInTheDocument();
    expect(screen.getByText(/Nickname inválido/i)).toBeInTheDocument();
    expect(screen.getByText(/Contraseña inválida/i)).toBeInTheDocument();
    expect(screen.getByText(/Correo electrónico inválido/i)).toBeInTheDocument();
    expect(screen.getByText(/El número de celular es inválido/i)).toBeInTheDocument();
    expect(screen.getByText(/La dirección de residencia no puede estar vacía/i)).toBeInTheDocument();
  });

  test('successful login redirects user with correct role', async () => {
    // Realiza login con credenciales válidas
    fireEvent.change(screen.getByTestId('email-input-login'), { target: { value: 'admin@gmail.com' } }); // 'email-input-login' para iniciar sesión
    fireEvent.change(screen.getByTestId('password-input-login'), { target: { value: '123' } });

    fireEvent.click(screen.getByRole('button', { name: /Iniciar Sesión/i }));

    await waitFor(() => {
      expect(screen.queryByText(/Iniciar Sesión/i)).not.toBeInTheDocument(); // Asegúrate de que la pantalla cambie
    });
  });
});


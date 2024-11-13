import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { API_URL } from '../../../url';
import '../../styles/Login.css';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Por favor, completa el captcha.');
      return;
    }

    const loginData = {
      username: username,
      password: password,
      recaptchaResponse: captchaValue,
    };

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);

        // Almacenar el token en localStorage
        localStorage.setItem('token', data.token);

        // Mostrar mensaje de éxito
        alert('Logueado con éxito');
      } else {
        console.error('Error en la solicitud:', response.statusText);
        alert('Error en la autenticación');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('No se pudo conectar con el servidor');
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      
      <div className="login-container">
        <div className="logo-container">
          <img src="logo-unsm.png" alt="UNSM Logo" className="logo" />
          <div className="titu">
            <h1>COMEDOR UNIVERSITARIO</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-wrapper">
              <i className="bi bi-person-fill"></i>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="USUARIO"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              <i className="bi bi-lock"></i>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="CONTRASEÑA"
              />
              <i className="fa fa-eye"></i>
            </div>
          </div>
          <div className="mb-3">
            <ReCAPTCHA
              sitekey="6LcoDX0qAAAAACQQ6VRy6Iwk67Thp_z4tLb6jUcE"
              onChange={handleCaptchaChange}
            />
          </div>
          <button type="submit" className="btn submit-btn">INGRESAR</button>
          <a href="/olvide-contrasena" className="forgot-password">¿Olvidaste tu contraseña?</a>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Navbar } from "../../components/Navbar.jsx";
import '../../styles/OlvideContrasena.css';

export function OlvideContrasena() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el correo de recuperación
    console.log('Correo para recuperar contraseña:', email);
  };

  return (
    <div>
      <Navbar />
      <div className="olvide-contrasena-container">
        <h2>Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="olvide-contrasena-button">
            Enviar enlace de recuperación
          </button>
        </form>
      </div>
    </div>
  );
}

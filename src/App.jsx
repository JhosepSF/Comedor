import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PanelPrincipal } from "./modules/pages/PanelPrincipal";
import { Producto } from "./modules/pages/Producto.jsx";
import { Cart } from "./modules/pages/Cart.jsx";
import { Login } from "./modules/pages/Login.jsx";
import { NewUser } from "./modules/pages/NewUser.jsx";
import { OlvideContrasena } from "./modules/pages/OlvideContrasena.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* ruta inicial */}
          <Route path="/" element={<Navigate to="/panelprincipal" />} />
          
          {/* demas rutas */}
          <Route path="/panelprincipal" element={<PanelPrincipal />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nuevo-usuario" element={<NewUser />} />
          <Route path="/olvide-contrasena" element={<OlvideContrasena />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

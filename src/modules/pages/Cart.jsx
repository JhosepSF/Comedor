import React, { useState } from 'react';
import { Navbar } from "../../components/Navbar.jsx";
import '../../styles/Cart.css';

export function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 10.0, quantity: 1 },
    { id: 2, name: 'Producto 2', price: 20.0, quantity: 2 },
    { id: 3, name: 'Producto 3', price: 30.0, quantity: 1 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const handleRemoveItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="cart-page">
        <h1>Carrito de Compras</h1>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value, 10))
                        }
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-total">
              <h2>Total: ${total.toFixed(2)}</h2>
              <button className="checkout-button">Proceder al Pago</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

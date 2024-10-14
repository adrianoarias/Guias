import React from 'react';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='container text-center'>
      <h2>Carrito</h2>
      {total === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total de productos: {total}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;

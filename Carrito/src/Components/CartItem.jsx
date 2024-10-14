import React from 'react';

function CartItem({ product, quantity, removeFromCart }) {
    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    return (
        <tr>
            <td>{product.name}</td>
            <td>{quantity}</td> {/* Mostrar la cantidad */}
            <td>{product.price}</td>
            <td>
                <button className="btn btn-danger" onClick={handleRemoveFromCart}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
export default CartItem;

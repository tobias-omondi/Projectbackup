import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
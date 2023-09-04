import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const items = cartItems || [];

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

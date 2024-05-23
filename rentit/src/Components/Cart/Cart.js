import './Cart.css'; // Import CSS file
import React, { useState } from 'react';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`cart-container ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleCart}>Cart</button>
      {isOpen && (
        <div className="cart-window">
          {/* Add your cart content here */}
          <p>Your cart is empty.</p>
          <button onClick={toggleCart}>Close Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

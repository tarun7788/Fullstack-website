import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items when the component mounts
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/cart/${54}`);
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items: ', error);
    }
  };

  return (
    <div>
      <h1>Cart Items</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item._id}>
            <div>Item Name: {item.itemName}</div>
            <div>Price: {item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

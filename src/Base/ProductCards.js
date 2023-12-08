


import React, { useState } from 'react';
import { products } from '../Base/env';


const ProductCards = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingCartItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingCartItem) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
  };
  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    return totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  };
  
  return (
    <>
      <div className='row'>
        {products.map(item => (
          <div className='col-lg-2 border m-3' style={{ borderRadius: '10px' }} key={item.id}>
            <p>{item.id}</p>
            <b>{item.category}</b><br/>
            <b>{item.price}</b>
            <br/>
            <button onClick={() => addToCart(item)}>Add to Cart</button> {/* Change this line */}
          </div>
        ))}
      </div>
   
      <div className='cart'>
  <h2>My Cart</h2>
 <ul>
  {cart.map(cartItem => (
    <li key={cartItem.id}>
      {cartItem.category} - Quantity: {cartItem.quantity} - Subtotal: {(
        cartItem.price * cartItem.quantity
      ).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
    </li>
  ))}
</ul>

  <div className='cart-summary'>
    <h3>Cart Summary</h3>
    <p>Total Price: ${calculateTotalPrice()}</p>
    
    <ul>
      {cart.map(cartItem => (
        <li key={cartItem.id}>
          {cartItem.category} - Quantity: {cartItem.quantity} - Subtotal: ${cartItem.price * cartItem.quantity}
        </li>
      ))}
    </ul>
  </div>
</div>

    </>
  );
};

export default ProductCards;



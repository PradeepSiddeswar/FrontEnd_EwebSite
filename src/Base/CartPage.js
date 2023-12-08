import React from 'react'

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const removeFromCart = (product) => {
      // Implement your remove from cart logic here
    };
  return (
    <>
       <div>CartPage</div>
     <Cart cart={cart} removeFromCart={removeFromCart} totalCart={totalCart} Cart/>
     </>
 
  )
}

export default CartPage
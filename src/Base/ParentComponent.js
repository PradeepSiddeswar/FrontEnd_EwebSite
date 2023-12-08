// import React from "react";
// import ChildComponent from "./ChildComponent";

// function ParentComponent() {
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <ChildComponent name="Alice" age={30} />
//         <ChildComponent name="Bob" age={25} />
//       </div>
//     );
//   }
  

// export default ParentComponent;

import React, { useState } from "react";
import Cart from "./Cart"; // Import the Cart component
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  // Define some sample cart data and functions for demonstration
  const [cart, setCart] = useState([]);
  const removeFromCart = (product) => {
    // Implement your remove from cart logic here
  };
  const totalCart = 0; // Replace with your totalCart logic

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name="Alice" age={30} />
        <ChildComponent name="Bob" age={25} />
      {/* Render the Cart component and pass the props */}
      <Cart cart={cart} removeFromCart={removeFromCart} totalCart={totalCart} />
    </div>
  );
}

export default ParentComponent;


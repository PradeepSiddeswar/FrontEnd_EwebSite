// Child Component: Greeting.js
import React from 'react';

function Greeting(props) {
  // The "name" prop is accessible through the "props" object
  const { name } = props;

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Welcome to our website.</p>
    </div>
  );
}

export default Greeting;

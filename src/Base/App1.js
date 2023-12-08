// Parent Component: App.js
import React from 'react';
import Greeting from './Greeting';

function App1() {
  const name = 'John';

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Greeting name={name} />
    </div>
  );
}

export default App1;

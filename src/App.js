import React from 'react';
import {useSelector} from 'react-redux'
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);

  // Increment function - Increase Redux values.
  const increment = () => {
      console.log("Increment")
  };
  // Decrement function - Decrease Redux values.
  const decrement = () => {

  };

  return (
    <div>
      <h1>Counter App Demo</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

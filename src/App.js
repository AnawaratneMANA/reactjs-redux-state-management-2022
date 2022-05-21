import React from 'react';
import {useSelector} from 'react-redux'
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter App Demo</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;

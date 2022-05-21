import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import {actions} from './store/index'

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // Increment function - Increase Redux values.
  const increment = () => {
      dispatch(actions.increment())
  };
  // Decrement function - Decrease Redux values.
  const decrement = () => {
      dispatch(actions.decrement())
  };

  const addby = () => {
    dispatch(actions.addby(10))
  }

  return (
    <div className='container'>
      <h1>Counter App Demo</h1>
      <h2>{counter}</h2>
      Increment the value in the redux state.
      <button className='btn-success' onClick={increment}>Increment</button><br></br>
      Decrement the value in the redux state.
      <button className='btn-success' onClick={decrement}>Decrement</button><br></br>
      Passing Payload to the redux state.
      <button className='btn-success' onClick={addby}>Add By 10</button><br></br>
    </div>
  );
}

export default App;

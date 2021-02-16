import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus,minus } from './redux/counter';

function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const increase = () => dispatch(plus());
  const decrease = () => dispatch(minus());
  
  return (
    <>
      <div>{count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default App;

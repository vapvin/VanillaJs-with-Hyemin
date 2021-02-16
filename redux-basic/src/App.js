import {useSelector, useDispatch} from 'react-redux';
import {plus, minus} from './utils/counter';

function App() {

  const {count} = useSelector(state => ({
    count: state.count,
  }));

  const dispatch = useDispatch();

  const increase = () => dispatch(plus());
  const decrease = () => {
    const action = minus();
    dispatch(action);
  };
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default App;

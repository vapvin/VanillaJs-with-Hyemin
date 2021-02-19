import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increase,decrease,increaseSagaExample,decreaseSagaExample} from './module/counter';

function Counter(){
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    const plus = () => dispatch(increase());
    const minus = () => dispatch(decrease());

    const plusSaga = () => dispatch(increaseSagaExample());
    const minusSaga = () => dispatch(decreaseSagaExample());
    
    return(
        <>
        <div>{count}</div>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
        <button onClick={plusSaga}>plus-saga</button>
        <button onClick={minusSaga}>minus-saga</button>
        </>
    )
}

export default Counter;
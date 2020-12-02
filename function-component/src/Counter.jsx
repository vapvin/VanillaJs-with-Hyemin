import React, {useState} from 'react';

const Counter = ({title}) => {

    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(prev => prev + 1);
    }

    const minus = () => {
        setCount(prev => prev - 1);
    }

    return (
        <>
            <h1>{title}</h1>
            <h2>count: {count}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </>
    )
}

export default Counter;

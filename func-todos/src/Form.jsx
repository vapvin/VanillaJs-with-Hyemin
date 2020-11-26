import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import styled from 'styled-components';

const Form = ({todos, setData}) => {

    const [input, setInput] = useState("");

    const onChange = (e) => {
        const {value} = e.target;
        setInput(value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        const newArray = [...todos, {text: input, id: uuid()}];
        setData(newArray);
        setInput("");
    };
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={input} />
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;


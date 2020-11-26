import styled from 'styled-components';
import {useState} from 'react';
import Form from './Form';
import Title from './Title';
import List from './List';

const Box = styled.div`
    width: 600px;
    height: 800px;
    margin: 200px auto;
    background: #eee;
    box-shadow: 0 0 10px 3px rgba(0,0,0,0.3);
`;

const Wrap = () => {

    const [todos, setTodos] = useState([]);
    console.log(todos)
    return (
        <Box>
            <Title />
            <Form todos={todos} setData={setTodos} />
            <List todos={todos} />
        </Box>
    )
}

export default Wrap;
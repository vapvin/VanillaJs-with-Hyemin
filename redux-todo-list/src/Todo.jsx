import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, removeTodo} from './modules/todo';


function Todo(){

    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const todos = useSelector(state => state);

    const getInput = e => {
        const {target: {value}} = e;
        setText(value);
    }

    const onDelete = id => {
        dispatch(removeTodo(id));
    }

    const submitData = e => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText("");
    }
    
    return (
        <>
            <form onSubmit={submitData}>
                <input name="todo" type="text" onChange={getInput} value={text} />
                <button type="submit">제출</button>
            </form>

            <ul>
                {todos ? (
                    todos.map(todo => (
                        <li id={todo.id} key={todo.id}>{todo.text} <button onClick={() => onDelete(todo.id)}>X</button></li>
                    ))
                ) : null}
            </ul>
        </>
    )
}

export default Todo;


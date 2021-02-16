const ADD_TODO = "todo/ADD_TODO";
const REMOVE_TODO = "todo/REMOVE_TODO";


export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: Math.floor(Math.random() * 1000000000),
        text
    }
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

const initialState = [];

export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            // return [...state, action.todo]
            return state.concat(action.todo);
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
}
import Item from "./Item";

const List = ({todos, deleteTodo}) => {
    return (
        <ul>
            {todos ? todos.map(todo => {
                return <Item text={todo.text} deleteTodo={deleteTodo} id={todo.id} key={todo.id} />
            }) : "할 일 없음"}
        </ul>
    )
}

export default List;
import TodoListItem from './TodoListItem';


export default function TodoList({tasks,deleteTodo}) {

    return (
        <ul className="list-reset">
            {tasks.map((task, index) => (
                <TodoListItem key={index} todo={task} deleteTodo={deleteTodo} />
            ))}
        </ul>
    )
}
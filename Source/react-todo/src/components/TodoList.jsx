import TodoListItem from './TodoListItem';


export default function TodoList({tasks}) {

    return (
        <ul className="list-reset">
            {tasks.map((task, index) => (
                <TodoListItem key={index} title={task.title} checked={task.checked} />
            ))}
        </ul>
    )
}
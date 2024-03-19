import TodoListItem from './TodoListItem';


export default function TodoList({tasks}) {

    return (
        <ul className="list-reset">
            {tasks.map((task) => (
                <TodoListItem title={task.title} checked={task.checked} />
            ))}
        </ul>
    )
}
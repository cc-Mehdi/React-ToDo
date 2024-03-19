import TodoListItem from './TodoListItem';


export default function TodoList() {
    return (
        <ul className="list-reset">
            <TodoListItem title="Tailwind CSS To DO App List 1" />
            <TodoListItem title="Tailwind CSS To DO App List 2" isDone={true} />
        </ul>
    )
}
import { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export default function Todos() {

    const todos = [
        {
            id: uuidv4(),
            title: "task one",
            checked: true
        },
        {
            id: uuidv4(),
            title: "task two",
            checked: false
        }
    ];

    const [tasks, setTasks] = useState(todos);
    const [inputValue, setInputValue] = useState('');

    // Event handler to update the state when the input value changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Event handler to handle form submission when Enter key is pressed
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    // Event handler to handle form submission
    const handleSubmit = () => {
        // You can now use inputValue in your logic or send it to an API, etc.
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                title: inputValue,
                checked: false
            }
        ]);
        // Clear input after submission
        setInputValue('');
    };

    const deleteTodoHandler = (todo) => {
        let newTodoList = tasks.filter((todoItem) => {
            if (todoItem.id != todo.id)
                return true;
        });
        setTasks(newTodoList);
    }


    return (
        <div className="bg-gray-100">
            <div className="flex items-center justify-center h-screen">
                <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                    <div className="flex items-center mb-6">
                        <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                    </div>
                    <div className="relative">
                        <input type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="What needs to be done today?"
                            className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                    </div>
                    <TodoList tasks={tasks} deleteTodo={deleteTodoHandler} />
                </div>
            </div>
        </div>
    )
}
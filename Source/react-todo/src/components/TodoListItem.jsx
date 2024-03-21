import { useState } from "react";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";



export default function TodoListItem({ todo }) {




    return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
            <div>
                <input type="checkbox" checked={todo?.checked} onChange={() => { }} className="" />
                <p className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.checked ? 'line-through' : ''}`}>{todo?.title}</p>
            </div>
            <button type="button" className="absolute right-0 flex items-center space-x-1">
                <EditIcon />
                <DeleteIcon onClick={() => {console.log({todo})}} />
            </button>
        </li>
    )







}



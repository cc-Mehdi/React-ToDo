import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";



export default function TodoListItem({title, isDone}) {
    return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
            <div>
                
                {
                    (isDone)
                    ? <input type="checkbox" checked onChange={() => { }} className="" />
                    : <input type="checkbox" onChange={() => { }} className="" />
                }
                {
                    (isDone)
                    ? <p className="inline-block mt-1 ml-2 text-gray-600 line-through">Tailwind CSS To DO App List 2</p>
                    : <p className="inline-block mt-1 ml-2 text-gray-600">{title}</p>
                }
            </div>
            <button type="button" className="absolute right-0 flex items-center space-x-1">
                <EditIcon />
                <DeleteIcon />
            </button>
        </li>
    )
}
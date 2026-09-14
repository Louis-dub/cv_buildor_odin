import { FaTrashAlt } from "react-icons/fa";

export default function InputTextWithTrash({ placeholder = "", value, onChange, onDelete }) {
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <div className="w-80 h-10 p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1 bg-white flex items-center justify-between">
            <input
                type="text"
                className="focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button
                className="hover:scale-105 active:scale-95 transition-all ease-out"
                onClick={onDelete}
            >
                <FaTrashAlt />
            </button>
        </div>
    )
}

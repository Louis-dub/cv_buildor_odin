import { useState } from "react";

export default function InputEmail({ placeholder = "", value, onChange }) {
    const [error, setError] = useState("");

    function handleChange(e) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newVal = e.target.value;

        if (newVal && !regex.test(newVal))
            setError("Invalid email format");
        else
            setError("");
        onChange(newVal);
    }

    return (
        <>
            <input
                type="email"
                className="w-80 h-10 p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    )
}

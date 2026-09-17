import { useState } from "react";

export default function InputDate({ placeholder = "", value, onChange }) {
    const [error, setError] = useState("");

    function handleChange(e) {
        const newVal = e.target.value;
        const regex = /^(19|20)\d{2}-(0[1-9]|1[0-2])$/;

        if (newVal && !regex.test(newVal))
            setError("Invalid format. Use YYYY-MM (ex: 2026-09)");
        else
            setError("");
        onChange(newVal);
    }

    return (
        <>
            <div className="flex items-center gap-2 w-80 justify-between">
                <span>{placeholder}</span>
                <input
                    type="month"
                    className="w-[200px] h-10 p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1"
                    value={value}
                    onChange={handleChange}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    );
}

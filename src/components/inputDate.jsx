import { useState } from "react";

export default function InputDate({ placeholder = "", value, onChange }) {
    const [error, setError] = useState("");

    function handleChange(e) {
        const newVal = e.target.value;
        const regex = /^(19|20)\d{2}-(0[1-9]|1[0-2])$/;

        if (newVal && !regex.test(newVal)) {
            setError("Invalid format. Use YYYY-MM (ex: 2026-09)");
        } else {
            setError("");
        }
        const formattedDate = new Date(newVal).toLocaleDateString('en-En', { month: 'long', year: 'numeric' });
        onChange(formattedDate);
    }

    return (
        <>
            <input
                type="month"
                className="w-80 h-10 p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    );
}

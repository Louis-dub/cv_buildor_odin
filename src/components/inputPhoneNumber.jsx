import { useState } from "react";

export default function InputPhoneNumber({ placeholder = "", value, onChange }) {
    const [error, setError] = useState("");
    const [len, setLen] = useState(0);
    
    function handleChange(e) {
        let newVal = e.target.value;
        const regex = /^0[1-9](?:\s?\d{2}){4}$/;

        if (String(newVal).replaceAll(/\s/g, "").length % 2 === 0 && String(newVal).length > len)
            newVal += " ";
        while (newVal.length > 14)
            newVal = newVal.slice(0, -1);
        if (newVal && !regex.test(newVal))
            setError("Invalid format");
        else
            setError("");
        setLen(String(newVal).length);
        onChange(newVal);
    }

    return (
        <>
            <div className="flex items-center gap-2 w-80 justify-between">
                <span>{placeholder}</span>
                <input
                    type="tel"
                    className="w-[160px] h-10 p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1"
                    value={value}
                    onChange={handleChange}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    );
}

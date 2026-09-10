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
            setError("Invalid date format");
        else
            setError("");
        setLen(String(newVal).length);
        onChange(newVal);
    }

    return (
        <>
            <input
                type="tel"
                className="w-[140px] h-10 p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    );
}

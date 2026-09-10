export default function InputText({ placeholder = "", value, onChange }) {
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <input
            type="text"
            className="w-80 h-10 p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    )
}

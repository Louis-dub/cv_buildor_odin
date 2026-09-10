export default function InputTextArea({ placeholder = "", value, onChange }) {
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <>
            <textarea
                className="w-80 min-h-[100px] max-h-[200px] resize-y p-3 border border-black rounded-[5px] focus:outline-none focus:ring-1"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            >
            </textarea>
        </>
    )
}

import InputText from '../components/inputText';

export default function HeaderCreator({ nameValue, jobValue, onNameChange, onJobChange }) {
    return (
        <>
            <div className="mt-4 border border-black rounded-[15px] p-4 flex flex-col items-center gap-2 bg-gray-200">
                <InputText placeholder='Full Name' value={nameValue} onChange={onNameChange} />
                <InputText placeholder='Job sought' value={jobValue} onChange={onJobChange} />
            </div>
        </>
    );
}

import InputText from '../components/inputText';

export default function HeaderCreator({ nameValue, jobValue, onNameChange, onJobChange }) {
    return (
        <>
            <div className="border-[3px] border-black rounded-15px p-4 flex flex-col items-center">
                <InputText placeholder='Full Name' value={nameValue} onChange={onNameChange} />
                <InputText placeholder='Job sought' value={jobValue} onChange={onJobChange} />
            </div>
        </>
    );
}

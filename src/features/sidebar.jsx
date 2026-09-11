import InputPhoneNumber from '../components/inputPhoneNumber';
import InputEmail from '../components/inputEmail';
import InputText from '../components/inputText';

export default function Sidebar({
    call,
    email,
    github,
    onCallChange,
    onEmailChange,
    onGithubChange
}) {
    return (
        <>
            <h1 className="text-xl font-bold">Contact</h1>
            <div className="mt-2 mb-4 border border-black rounded-[15px] p-4 flex flex-col items-center gap-2 bg-gray-200">
                <InputPhoneNumber placeholder="Your phone number" value={call} onChange={onCallChange} />
                <InputEmail placeholder="Your email" value={email} onChange={onEmailChange} />
                <InputText placeholder="Your github account" value={github} onChange={onGithubChange} />
            </div>
        </>
    );
}

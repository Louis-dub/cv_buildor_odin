import InputPhoneNumber from '../components/inputPhoneNumber';
import InputEmail from '../components/inputEmail';
import InputText from '../components/inputText';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import InputTextWithTrash from '../components/inputTextWithTrash';

export default function Sidebar({
    call,
    email,
    github,
    languages,
    librarys,
    tools,
    onCallChange,
    onEmailChange,
    onGithubChange,
    onLanguagesChange,
    onLibrarysChange,
    onToolsChange
}) {
    function handleAddSkills(programInput, setProgramInput) {
        setProgramInput([...programInput, ""]);
    }

    function handleSetValue(value, index, programInput, setProgramInput) {
        const newProgramInput = [...programInput];
        newProgramInput[index] = value;
        setProgramInput(newProgramInput);
    }

    function handleRemoveInput(index, programInput, setProgramInput) {
        const newProgramInput = [...programInput];
        newProgramInput.splice(index, 1);
        setProgramInput(newProgramInput); 
    }
    
    return (
        <>
            <h1 className="text-xl font-bold">Contact</h1>
            <div className="mt-2 mb-4 border border-black rounded-[15px] p-4 flex flex-col items-center gap-2 bg-gray-200">
                <InputPhoneNumber placeholder="Your phone number" value={call} onChange={onCallChange} />
                <InputEmail placeholder="Your email" value={email} onChange={onEmailChange} />
                <InputText placeholder="Your github account" value={github} onChange={onGithubChange} />
            </div>
            <h1 className="text-xl font-bold">Skills</h1>
            <div className="mt-2 mb-4 border border-black rounded-[15px] p-4 flex flex-col items-center gap-2 bg-gray-200">
                {languages.map((input, index) => (
                    <InputTextWithTrash
                        key={index}
                        placeholder="New Skill"
                        value={input}
                        onChange={(e) => handleSetValue(e.target.value, index, languages, onLanguagesChange)}
                        onDelete={() => handleRemoveInput(index, languages, onLanguagesChange)}
                    />
                ))}
                <button
                    onClick={() => handleAddSkills(languages, onLanguagesChange)}
                    className="w-80 text-white bg-gray-900 rounded-[10px] p-2 flex items-center gap-1 hover:scale-105 active:scale-95 transition-all ease-out"
                >
                    <FaPlus />
                    Add programming Language
                </button>
                {librarys.map((input, index) => (
                    <InputTextWithTrash
                        key={index}
                        placeholder="New Skill"
                        value={input}
                        onChange={(e) => handleSetValue(e.target.value, index, librarys, onLibrarysChange)}
                        onDelete={() => handleRemoveInput(index, librarys, onLibrarysChange)}
                    />
                ))}
                <button
                    onClick={() => handleAddSkills(librarys, onLibrarysChange)}
                    className="w-80 text-white bg-gray-900 rounded-[10px] p-2 flex items-center gap-1 hover:scale-105 active:scale-95 transition-all ease-out"
                >
                    <FaPlus />
                    Add library
                </button>
                {tools.map((input, index) => (
                    <InputTextWithTrash
                        key={index}
                        placeholder="New Skill"
                        value={input}
                        onChange={(e) => handleSetValue(e.target.value, index, tools, onToolsChange)}
                        onDelete={() => handleRemoveInput(index, tools, onToolsChange)}
                    />
                ))}
                <button
                    onClick={() => handleAddSkills(tools, onToolsChange)}
                    className="w-80 text-white bg-gray-900 rounded-[10px] p-2 flex items-center gap-1 hover:scale-105 active:scale-95 transition-all ease-out"
                >
                    <FaPlus />
                    Add tool
                </button>
            </div>
        </>
    );
}

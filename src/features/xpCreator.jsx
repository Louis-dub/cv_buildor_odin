import InputText from "../components/inputText";
import InputTextArea from "../components/inputTextArea";
import InputDate from "../components/inputDate";
import { useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

export default function XpCreator({ xps, onXpsChange }) {
    function handleAddXp() {
        const newXps = [...xps, { name: "", start: "", end: "", description: "" }];
        onXpsChange(newXps);
    }

    function handleSetNameJob(index, name) {
        const tempXps = [...xps];
        tempXps[index] = { ...tempXps[index], name: name };
        onXpsChange(tempXps);
    }

    function handleSetDateJob(index, date, type) {
        const tempXps = [...xps];
        if (type === 0) {
            tempXps[index] = { ...tempXps[index], start: date };
        } else {
            tempXps[index] = { ...tempXps[index], end: date };
        }
        onXpsChange(tempXps);
    }

    function handleRemoveInput(index) {
        const newXp = [...xps];
        newXp.splice(index, 1);
        onXpsChange(newXp); 
    }

    return (
        <>
            {xps.map((xp, index) => (
                <div
                    key={index}
                    className="mt-2 mb-4 border border-black rounded-[15px] p-4 flex flex-col items-center gap-2 bg-gray-200"
                >
                    <div className="flex items-center w-[100%] pr-2 pl-2 justify-between">
                        <h1 className="text-center font-2xl font-bold">New Experince</h1>
                        <button
                            onClick={() => handleRemoveInput(index)}
                            className="hover:scale-105 active:scale-95 transition-all ease-out"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                    <InputText
                        placeholder="Experience Name"
                        value={xp.name}
                        onChange={(value) => handleSetNameJob(index, value)}
                    />
                    <InputDate
                        placeholder="Start Date"
                        value={xp.start}
                        onChange={(value) => handleSetDateJob(index, value, 0)}
                    />
                    <InputDate
                        placeholder="End Date"
                        value={xp.end}
                        onChange={(value) => handleSetDateJob(index, value, 1)}
                    />
                    <InputTextArea
                        placeholder="Description"
                        value={xp.description}
                        onChange={(value) => {
                            const tempXps = [...xps];
                            tempXps[index] = { ...tempXps[index], description: value };
                            onXpsChange(tempXps);
                        }}
                    />
                </div>
            ))}
            <div className="mt-2 mb-4 border border-black rounded-[15px] p-4 flex flex-col items-center gap-2 bg-gray-200">
                <button
                    onClick={handleAddXp}
                    className="w-80 text-white bg-gray-900 rounded-[10px] p-2 flex items-center justify-center gap-1 hover:scale-105 active:scale-95 transition-all ease-out"
                >
                    <FaPlus />
                    Add Experience
                </button>
            </div>
        </>
    );
}

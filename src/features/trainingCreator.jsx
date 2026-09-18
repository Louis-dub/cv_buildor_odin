import InputText from "../components/inputText";
import InputTextArea from "../components/inputTextArea";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

export default function TrainingCreator({ trainings, onTrainingsChange }) {
    function handleAddXp() {
        const newTrainings = [...trainings, { name: "", start: "", end: "", description: "" }];
        onTrainingsChange(newTrainings);
    }

    function handleSetNameJob(index, name) {
        const tempTrainings = [...trainings];
        tempTrainings[index] = { ...tempTrainings[index], name: name };
        onTrainingsChange(tempTrainings);
    }

    function handleSetDateJob(index, date, type) {
        const tempTrainings = [...trainings];
        if (type === 0) {
            tempTrainings[index] = { ...tempTrainings[index], start: date };
        } else {
            tempTrainings[index] = { ...tempTrainings[index], end: date };
        }
        onTrainingsChange(tempTrainings);
    }

    function handleRemoveInput(index) {
        const newTrainings = [...trainings];
        newTrainings.splice(index, 1);
        onTrainingsChange(newTrainings); 
    }

    return (
        <>
            {trainings.map((training, index) => (
                <div
                    key={index}
                    className="mt-2 mb-4 border border-black rounded-[15px] p-4 flex flex-col items-center gap-2 bg-gray-200"
                >
                    <div className="flex items-center w-[100%] pr-2 pl-2 justify-between">
                        <h1 className="text-center font-2xl font-bold">New Training</h1>
                        <button
                            onClick={() => handleRemoveInput(index)}
                            className="hover:scale-105 active:scale-95 transition-all ease-out"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                    <InputText
                        placeholder="Experience Name"
                        value={training.name}
                        onChange={(value) => handleSetNameJob(index, value)}
                    />
                    <InputText
                        placeholder="Start Date (year only)"
                        value={training.start}
                        onChange={(value) => handleSetDateJob(index, value, 0)}
                    />
                    <InputText
                        placeholder="End Date (year only)"
                        value={training.end}
                        onChange={(value) => handleSetDateJob(index, value, 1)}
                    />
                    <InputTextArea
                        placeholder="Description"
                        value={training.description}
                        onChange={(value) => {
                            const tempTrainings = [...trainings];
                            tempTrainings[index] = { ...tempTrainings[index], description: value };
                            onTrainingsChange(tempTrainings);
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
                    Add Training
                </button>
            </div>
        </>
    );
}

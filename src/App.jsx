import Header from './features/header';
import CvSheet from './features/cvSheet';
import { useState } from 'react';
import HeaderCreator from './features/headerCreator';
import { usePDF } from 'react-to-pdf';

export default function App() {
    const [nameValue, setNameValue] = useState("");
    const [jobValue, setJobValue] = useState("");

    const { toPDF, targetRef } = usePDF({
        filename: `${nameValue.replace(/\s+/g, '_')}_CV.pdf`,
    });

    function handleChangeName(newVal) {
        setNameValue(newVal)
    }

    function handleChangeJob(newVal) {
        setJobValue(newVal);
    }
    
    return (
       <div className="flex flex-col min-h-screen">
           <Header onDownload={toPDF} />
            <main className="flex-1 grid grid-cols-[2fr_3fr] gap-6 bg-gray-400">
                <div className="flex flex-col items-end pt-[100px]">
                    <div>
                        <h1 className="text-2xl font-bold">General Inforamtion</h1>
                        <HeaderCreator
                            nameValue={nameValue}
                            jobValue={jobValue}
                            onNameChange={handleChangeName}
                            onJobChange={handleChangeJob}
                        />
                    </div>
                </div>
                <div className='pt-[75px]'>
                    <CvSheet
                        targetRef={targetRef}
                        name={nameValue}
                        job={jobValue}
                    />
                </div>
            </main>
        </div>
    );
}

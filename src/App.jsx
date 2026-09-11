import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './features/header';
import CvSheet from './features/cvSheet';
import HeaderCreator from './features/headerCreator';
import Sidebar from './features/sidebar';

export default function App() {
    const [nameValue, setNameValue] = useState("Louis DUBOIS");
    const [jobValue, setJobValue] = useState("Étudiant");
    const [callValue, setCallValue] = useState("06 99 30 79 58");
    const [emailValue, setEmailValue] = useState("louis.dubois@epitech.eu");
    const [githubValue, setGithubValue] = useState("github.com/Louis-dub");

    const contentRef = useRef(null);

    const handleDownload = useReactToPrint({
        contentRef,
        documentTitle: `${nameValue.replace(/\s+/g, '_') || 'CV'}_CV`,
    });

    function handleChangeName(newVal) {
        setNameValue(newVal)
    }

    function handleChangeJob(newVal) {
        setJobValue(newVal);
    }

    function handleChangeCall(newVal) {
        setCallValue(newVal);
    }

    function handleChangeEmail(newVal) {
        setEmailValue(newVal);
    }

    function handleChangeGithub(newVal) {
        setGithubValue(newVal);
    }
    
    return (
       <div className="flex flex-col min-h-screen">
           <Header onDownload={handleDownload} />
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
                        <Sidebar
                            call={callValue}
                            email={emailValue}
                            github={githubValue}
                            onCallChange={handleChangeCall}
                            onEmailChange={handleChangeEmail}
                            onGithubChange={handleChangeGithub}
                        />
                    </div>
                </div>
                <div className='pt-[75px]'>
                    <CvSheet
                        contentRef={contentRef}
                        name={nameValue}
                        job={jobValue}
                        call={callValue}
                        email={emailValue}
                        github={githubValue}
                    />
                </div>
            </main>
        </div>
    );
}

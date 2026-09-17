import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './features/header';
import CvSheet from './features/cvSheet';
import HeaderCreator from './features/headerCreator';
import Sidebar from './features/sidebar';
import XpCreator from './features/xpCreator';

export default function App() {
    const [nameValue, setNameValue] = useState("");
    const [jobValue, setJobValue] = useState("");
    const [callValue, setCallValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [githubValue, setGithubValue] = useState("");
    const [languagesValue, setLanguagesValue] = useState([]);
    const [librarysValue, setLibraryesValue] = useState([]);
    const [toolsValue, setToolsValue] = useState([]);
    const [langValue, setLangValue] = useState([]);
    const [hobbies, setHobbies] = useState("");
    const [xpsValue, setXpsValue] = useState([]);

    const contentRef = useRef(null);

    const handleDownload = useReactToPrint({
        contentRef,
        documentTitle: `${nameValue.replace(/\s+/g, '_') || 'CV'}_CV`,
    });
    
    return (
       <div className="flex flex-col min-h-screen">
           <Header onDownload={handleDownload} />
            <main className="flex-1 grid grid-cols-[1fr_1fr] gap-6 bg-gray-400">
                <div className="flex p-[100px]">
                    <div className="border-r border-black pr-[25px]">
                        <h1 className="text-2xl font-bold">General Inforamtion</h1>
                        <HeaderCreator
                            nameValue={nameValue}
                            jobValue={jobValue}
                            onNameChange={setNameValue}
                            onJobChange={setJobValue}
                        />
                        <Sidebar
                            call={callValue}
                            email={emailValue}
                            github={githubValue}
                            languages={languagesValue}
                            librarys={librarysValue}
                            tools={toolsValue}
                            langs={langValue}
                            hobbies={hobbies}
                            onCallChange={setCallValue}
                            onEmailChange={setEmailValue}
                            onGithubChange={setGithubValue}
                            onLanguagesChange={setLanguagesValue}
                            onLibrarysChange={setLibraryesValue}
                            onToolsChange={setToolsValue}
                            onLangsChange={setLangValue}
                            onHobbiesChange={setHobbies}
                        />
                    </div>
                    <div className="pl-[25px]">
                        <h1 className="text-2xl font-bold">Experience Inforamtion</h1>
                        <XpCreator xps={xpsValue} onXpsChange={setXpsValue} />
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
                        languages={languagesValue}
                        libraries={librarysValue}
                        tools={toolsValue}
                        langs={langValue}
                        hobbies={hobbies}
                    />
                </div>
            </main>
        </div>
    );
}

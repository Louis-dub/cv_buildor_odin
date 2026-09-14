import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './features/header';
import CvSheet from './features/cvSheet';
import HeaderCreator from './features/headerCreator';
import Sidebar from './features/sidebar';

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

    const contentRef = useRef(null);

    const handleDownload = useReactToPrint({
        contentRef,
        documentTitle: `${nameValue.replace(/\s+/g, '_') || 'CV'}_CV`,
    });
    
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
                            onCallChange={setCallValue}
                            onEmailChange={setEmailValue}
                            onGithubChange={setGithubValue}
                            onLanguagesChange={setLanguagesValue}
                            onLibrarysChange={setLibraryesValue}
                            onToolsChange={setToolsValue}
                            onLangsChange={setLangValue}
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
                        languages={languagesValue}
                        libraries={librarysValue}
                        tools={toolsValue}
                        langs={langValue}
                    />
                </div>
            </main>
        </div>
    );
}

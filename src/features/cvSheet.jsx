import { FaEnvelope, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function CvSheet({
    contentRef,
    name,
    job,
    call,
    email,
    github,
    languages,
    libraries,
    tools,
    langs
}) {
    return (
        <div
            ref={contentRef}
            className="w-[210mm] h-[297mm] bg-[#f8f8f8] border border-[#e0e0e0] rounded-[2px] shadow-[0_0_10px_rgba(0, 0, 0, 0.1)]"
        >
            <div className="grid grid-cols-[1fr_2fr] gap-4 h-[100%] min-h-[100%]">
                <div className="flex flex-col h-[100%] gap-8 bg-blue-950 p-[30px] text-white">
                    <div className="flex flex-col gap-4 mt-[220px]">
                        <h1 className="text-xl font-bold">Contact</h1>

                        <span className="table w-full">
                            <span className="table-cell align-middle w-[24px]">
                                <FaPhoneAlt size={20} />
                            </span>
                            <span className="table-cell align-middle pl-2">
                                {call}
                            </span>
                        </span>

                        <span className="table w-full">
                            <span className="table-cell align-middle w-[24px]">
                                <FaEnvelope size={20} />
                            </span>
                            <span className="table-cell align-middle pl-2">
                                {email}
                            </span>
                        </span>

                        <span className="table w-full">
                            <span className="table-cell align-middle w-[24px]">
                                <FaGithub size={20} />
                            </span>
                            <span className="table-cell align-middle pl-2">
                                {github}
                            </span>
                        </span>

                        <h1 className="text-xl font-bold">Skills</h1>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <span>Programming Languages: {languages.join(", ")} </span>
                            </li>
                            <li>
                                <span>Libraries: {libraries.join(", ")} </span>
                            </li>
                            <li>
                                <span>Tools: {tools.join(", ")} </span>
                            </li>
                        </ul>
                        <h1 className="text-xl font-bold">Languages</h1>
                        <ul>
                            {langs.map(lang => {
                                return (
                                    <li>
                                        <span>{lang}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-16 p-[30px]">
                    <div className="mt-16 mr-16 mb-16">
                        <h1 className="mb-4 text-5xl font-extrabold">{name}</h1>
                        <p className="text-3xl font-medium">{job}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

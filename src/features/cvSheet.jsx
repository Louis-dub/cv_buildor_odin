import { FaEnvelope, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function CvSheet({
    contentRef,
    name,
    job,
    call,
    email,
    github
}) {
    return (
        <div
            ref={contentRef}
            className="w-[210mm] min-h-[290mm] p-[30px] bg-[#f8f8f8] border border-[#e0e0e0] rounded-[2px] shadow-[0_0_10px_rgba(0, 0, 0, 0.1)] m-[20px_auto]"
        >
            <div className="grid grid-cols-[1fr_2fr] gap-4">
                <div className="flex flex-col gap-8 pt-[200px]">
                    <div className="flex flex-col gap-4">
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
                    </div>
                </div>
                <div className="flex flex-col gap-16">
                    <div className="mt-16 mr-16 mb-16">
                        <h1 className="mb-4 text-5xl font-extrabold">{name}</h1>
                        <p className="text-3xl font-medium">{job}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

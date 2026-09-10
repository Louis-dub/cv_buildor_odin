export default function CvSheet({ nameValue, jobValue }) {
    return (
        <div className="w-[210mm] min-h-[297mm] p-[30px] bg-[#f8f8f8] border border-[#e0e0e0] rounded-[2px] shadow-[0_0_10px_rgba(0, 0, 0, 0.1)] m-[20px_auto]">
            <div className="grid grid-cols-[1fr_3fr] gap-4">
                <div></div>
                <div className="flex flex-col gap-16">
                    <div className="m-16">
                        <h1 className="mb-4 text-5xl font-extrabold">{nameValue}</h1>
                        <p className="text-3xl font-medium">{jobValue}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

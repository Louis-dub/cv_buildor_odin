import Logo from '../assets/cv_buildor_logo.png';
import { FaFileDownload } from 'react-icons/fa';

export default function Header({ onDownload }) {
    return (
        <header className="bg-gray-900 border-b-[5px] border-black">
            <nav className="flex justify-around items-center p-5">
                <div className="flex items-center">
                     <img
                         alt=""
                         src={Logo}
                         className="h-10 w-auto"
                     />
                    <span className="ml-3 text-white text-xl font-bold">CV Buildor</span>
                </div>
                <div>
                    <button
                        className="text-xl text-white font-bold border-4 border-white rounded-[15px] p-2 hover:scale-110 active:scale-95 transition-all ease-out"
                    >New CV</button>
                </div>
                <div>
                    <button
                        onClick={onDownload}
                        className="text-xl text-white font-bold flex items-center gap-1 hover:scale-110 active:scale-95 transition-all ease-out"
                    >
                        <FaFileDownload size={24} />
                        Download                      
                  </button>
                </div>
            </nav>
        </header>
    );
}

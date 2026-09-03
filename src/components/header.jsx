import Logo from '../assets/cv_buildor_logo.png';
import { FaFileDownload } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="bg-gray-900">
            <nav className="flex justify-around items-center p-5">
                <div>
                    <a href="#" className="flex items-center">
                        <img
                            alt=""
                            src={Logo}
                            className="h-10 w-auto"
                        />
                        <span className="ml-3 text-white text-xl font-bold">CV Buildor</span>
                    </a>
                </div>
                <div>
                    <button className="text-xl text-white font-bold border-4 border-white rounded-[15px] p-2">New CV</button>
                </div>
                <div>
                    <button
                        className="text-xl text-white font-bold flex items-center gap-1"
                    >
                        <FaFileDownload size={24} />
                         Download
                  </button>
                </div>
            </nav>
        </header>
    );
}

import Logo from '../assets/cv_buildor_logo.png';

export default function Header() {
    return (
        <header className="bg-gray-900">
            <nav className="flex justify-around items-center p-5">
                <div>
                    <a href="#" className="flex items-center">
                        <img
                            alt=""
                            src={Logo}
                            className="h-8 w-auto"
                        />
                        <span className="ml-3 text-white text-xl font-bold">CV Buildor</span>
                    </a>
                </div>
                <div>
                    <button className="text-white font-bold">New CV</button>
                </div>
                <div>
                    <button className="text-white font-bold">Download</button>
                </div>
            </nav>
        </header>
    );
}

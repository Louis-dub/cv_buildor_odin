import Logo from '../assets/cv_buildor_logo.png';

export default function Header() {
    return (
        <header className="bg-gray-900">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center">
                        <img
                            alt=""
                            src={Logo}
                            className="h-8 w-auto"
                        />
                        <span className="ml-3 text-white text-xl font-bold">CV Buildor</span>
                    </a>
                </div>
                <div></div>
            </nav>
        </header>
    );
}

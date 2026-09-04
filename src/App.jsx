import Header from './components/header';

export default function App() {
    return (
       <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 grid grid-cols-[2fr_3fr] gap-6 bg-gray-400">
                <div></div>
                <div></div>
            </main>
        </div>
    );
}

import Link from "next/link";

export default function Header() {
    return (
        <header className=" flex flex-col items-center bg-rose-950 p-8">
            <h1 className="font-black text-8xl text-white">Worlds in Collision</h1>
            <nav className="mt-10">
                <ul className="flex space-x-10">
                    <li><Link className="hover:bg-rose-700 rounded-md font-semibold text-3xl text-white p-5" href="/">Home</Link></li>
                    <li><Link className="hover:bg-rose-700 rounded-md font-semibold text-3xl text-white p-5" href="/pag2">Resumo da Obra</Link></li>
                    <li><Link className="hover:bg-rose-700 rounded-md font-semibold text-3xl text-white p-5" href="/pag3">Sobre o autor</Link></li>
                    <li><Link className="hover:bg-rose-700 rounded-md font-semibold text-3xl text-white p-5"font-semibold href="/pag-teoria">Teoria</Link></li>
                </ul>
            </nav>
        </header>
    );
}

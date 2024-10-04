import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>Worlds in Collision</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/pag2">Resumo da Obra</Link></li>
                    <li><Link href="/pag3">Sobre o autor</Link></li>
                    <li><Link href="/pag-teoria">Teoria</Link></li>
                </ul>
            </nav>
        </header>
    );
}

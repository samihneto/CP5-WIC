import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>Worlds in Collision</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Resumo da Obra</Link></li>
                    <li><Link href="/">Sobre o autor</Link></li>
                    <li><Link href="/">Teoria</Link></li>
                    <li><Link href="/">API Nasa</Link></li>
                </ul>
            </nav>
        </header>
    );
}

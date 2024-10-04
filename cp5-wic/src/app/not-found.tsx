import imagemError from "@/imgs/notfound.png"
import Image from "next/image"
export default async function NotFound() {

    const response = await fetch(`http://localhost:3000/api`);
    const imagem = await response.json();
    
    return (
        <div>
            <Image src={imagem}
                width={800}
                height={500}
                alt="Error img" />
        </div>
    )
}
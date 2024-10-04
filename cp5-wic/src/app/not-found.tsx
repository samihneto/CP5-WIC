
import Image from "next/image"
import { tipoImage } from "@/types";
export default async function NotFound() {

    const response = await fetch(`http://localhost:3000/api`);
    const imagens = await response.json();
    const imagem:tipoImage = imagens.find( (img:tipoImage) => img.id ==  5);
    
    return (
        <div className="flex justify-center bg-rose-950 p-8">
            <Image  
                src={imagem.url}
                className="rounded-md shadow-2xl"
                width={800}
                height={500}
                alt="Error img" />
        </div>
    )
}
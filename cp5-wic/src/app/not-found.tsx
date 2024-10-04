import imagemError from "@/imgs/notfound.png"
import Image from "next/image"
import { tipoImage } from "@/types";
export default async function NotFound() {

    const response = await fetch(`http://localhost:3000/api`);
    const imagens = await response.json();
    //const imagem:tipoImage = imagens.find( (img:tipoImage) => img.id ==  5);
    console.log(imagens)
    return (
        <div>
            <Image src={imagemError}
                width={800}
                height={500}
                alt="Error img" />
        </div>
    )
}
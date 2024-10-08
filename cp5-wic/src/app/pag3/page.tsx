import Image from "next/image"
import { tipoImage } from "@/types";

export default async function Pag3() {

  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:tipoImage = imagens.find( (img:tipoImage) => img.id ==  4);

  return (
    <div className="bg-rose-950 p-8">
        <h1 className="font-black text-5xl text-white px-14">Sobre o Autor</h1>
        <div className="flex justify-center bg-rose-950 px-20  py-8 space-x-5 ">
            <Image  
                src={imagem.url}
                className="rounded-md shadow-2xl"
                width={200}
                height={500}
                alt="img do Velikovski" />
             <p className="text-white text-lg font-semibold text-2xl">Immanuel Velikovsky (1895-1979) foi um psicanalista e escritor russo-americano, conhecido principalmente por suas teorias controversas sobre a história e a astronomia. Ele ganhou notoriedade com seu livro "Mundos em Colisão" (1950), onde propôs que eventos cataclísmicos, como a passagem de planetas pelo sistema solar, teriam influenciado a história da Terra e das civilizações humanas.</p>
        
        </div>
        <h2 className="font-bold text-4xl text-white px-14">Principais Ideias: </h2>
        <ul className="px-14">
            <li><p className="mt-5 text-white text-lg">Catastrofismo: Velikovsky argumentou que a história da Terra foi moldada por grandes catástrofes, como a colisão de planetas e mudanças drásticas no clima.</p></li>
            <li><p className="mt-5 text-white text-lg">Interpretação de Textos Antigos: Ele reinterpretou relatos históricos e mitológicos de várias culturas, sugerindo que muitos deles poderiam estar relacionados a eventos astronômicos.</p></li>
            <li><p className="mt-5 text-white text-lg">Teoria dos Planetas: Velikovsky sugeriu que Vênus, Marte e Júpiter tiveram papéis significativos em catástrofes passadas na Terra, afirmando que Vênus havia se formado em Júpiter e, após uma série de eventos, se deslocou para sua órbita atual.</p></li>
        </ul>
        <h2 className="font-bold text-4xl text-white mt-10 px-14">Controvérsias: </h2>
        <ul className="px-14">
            <li><p className="mt-5 text-white text-lg">Suas teorias foram amplamente criticadas por cientistas e historiadores, que as consideraram pseudociência. A comunidade científica contestou a falta de evidências empíricas e a inconsistência de suas alegações.</p></li>
            <li><p className="mt-5 text-white text-lg">Apesar da controvérsia, Velikovsky teve um impacto significativo na cultura popular e na forma como algumas pessoas abordam a história e a ciência.</p></li>
        </ul>
        <h2 className="font-bold text-4xl text-white mt-10 px-14">Legado:</h2>
        <p className="mt-5 text-white text-lg px-14">Velikovsky continua a ser uma figura polarizadora. Enquanto alguns o veem como um pensador inovador que desafiou o establishment científico, outros o consideram um exemplo de como teorias não científicas podem ganhar popularidade. Suas ideias ainda são discutidas em círculos alternativos e em debates sobre ciência e história.</p>
    </div>
  )
}

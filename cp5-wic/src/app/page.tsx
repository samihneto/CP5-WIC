import Image from "next/image"
import { tipoImage } from "@/types";

export default async function Home() {

  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:tipoImage = imagens.find( (img:tipoImage) => img.id ==  1);
  
  return (
    <div className="bg-rose-950 py-10 px-20">
      <h1 className="font-black text-5xl text-white">Home</h1>
      <p className="mt-5 text-white">&quot;Worlds in Collision&quot; é um livro escrito por Immanuel Velikovsky e publicado em 1950. Nele, Velikovsky apresenta teorias controversas sobre a história e a cosmologia, propondo que eventos cataclísmicos no passado, como a passagem de Vênus e Marte perto da Terra, influenciaram as narrativas mitológicas e religiosas das civilizações antigas.

Velikovsky argumenta que esses encontros cósmicos poderiam ter causado catástrofes na Terra, como inundações e mudanças climáticas, e sugere que muitos mitos e histórias, incluindo as da Bíblia, são registros dessas experiências. Sua obra desafiou a visão científica tradicional da história e gerou debates acalorados, tanto em círculos acadêmicos quanto populares.

Embora suas teorias tenham sido amplamente rejeitadas pela comunidade científica, "Worlds in Collision" gerou interesse significativo e continua a ser um tópico de discussão para aqueles fascinados por teoria da conspiração, mitologia e a relação entre ciência e religião.</p>
    
      <div className="flex justify-center bg-rose-950 mt-10">
        <Image  
            src={imagem.url}
            className="rounded-md shadow-2xl"
            width={800}
            height={500}
            alt="img buraco negro destruindo um planeta" />
      </div>
    
    </div>
  )
}
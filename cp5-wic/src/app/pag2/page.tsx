import Image from "next/image"
import { tipoImage } from "@/types";

export default async function SobreObra() {

    const response = await fetch(`http://localhost:3000/api`);
    const imagens = await response.json();
    const imagem:tipoImage = imagens.find( (img:tipoImage) => img.id ==  2);

    return (
        <div className="bg-rose-950 p-8 space-y-5">
            <h1 className="font-black text-5xl text-white px-14">Sobre a Obra</h1>
            <p className="mt-5 text-white text-lg px-14"><strong>Worlds in Collision</strong> é uma obra de 1950 escrita por Immanuel Velikovsky, um psiquiatra e escritor russo.</p>
            <p className="mt-5 text-white text-lg px-14">Velikovsky propõe que eventos como o êxodo dos hebreus do Egito e outras catástrofes mencionadas em textos religiosos e mitológicos podem ter sido causados por encontros próximos entre a Terra e outros corpos celestes, como Vênus e Marte. Ele sugere que Vênus foi originalmente uma "nova" estrela e, após uma série de encontros catastróficos com a Terra e Marte, se estabeleceu na órbita que hoje conhecemos.</p>
            <p className="mt-5 text-white text-lg px-14">A principal tese do livro é que esses eventos astronômicos causaram mudanças geológicas, climáticas e culturais na Terra, o que Velikovsky tenta provar correlacionando mitos e tradições antigas de diversas culturas com a astronomia e geologia. Ele argumenta que as histórias de dilúvios, fogo caindo do céu e longos períodos de escuridão em várias tradições culturais são, na verdade, registros de eventos reais observados e transmitidos oralmente ou escritos em textos sagrados.</p>
            <div className="flex justify-center bg-rose-950 mt-10">
                <Image  
                    src={imagem.url}
                    className="rounded-md shadow-2xl"
                    width={800}
                    height={500}
                    alt="meteor img" />
            </div>
            <p className="mt-5 text-white text-lg px-14"><strong>Worlds in Collision</strong> causou grande polêmica na comunidade científica, principalmente porque Velikovsky usou relatos históricos e mitológicos como base para suas afirmações, algo que foi amplamente rejeitado pelos astrônomos, geólogos e historiadores. Muitos consideraram a obra pseudocientífica, alegando que ela carecia de fundamentos e provas empíricas rigorosas.</p>
            <p className="mt-5 text-white text-lg px-14">Apesar da controvérsia, o livro foi um sucesso comercial e influenciou debates populares sobre astronomia, história e ciência. Ele também deu origem a uma série de outras obras de Velikovsky, nas quais ele continuou a expandir suas ideias sobre catástrofes cósmicas e seu impacto na Terra.</p>
            <p className="mt-5 text-white text-lg px-14">A crítica científica foi implacável, mas Worlds in Collision continua sendo um exemplo de como teorias alternativas podem desafiar o status quo e provocar discussões sobre o método científico e a relação entre mitologia e ciência.</p>
        </div>
    )
}
import Image from "next/image"
import { tipoImage } from "@/types";

export default async function Teoria() {

    const response = await fetch(`http://localhost:3000/api`);
    const imagens = await response.json();
    const imagem:tipoImage = imagens.find( (img:tipoImage) => img.id ==  3);

    return (
        <div className="bg-rose-950 p-8 px-20">
            <h1 className="font-black text-5xl text-white">Catastrofismo Celestial</h1>
            <p className="mt-5 text-white text-lg">
                <strong>Catastrofismo Celestial</strong> é a ideia central da teoria de Immanuel Velikovsky, que propõe que eventos astronômicos catastróficos influenciaram a Terra em tempos históricos e tiveram consequências dramáticas para o planeta e a humanidade. Essa ideia contraria o pensamento científico dominante da época, que favorecia o uniformitarismo, a ideia de que as mudanças geológicas e astronômicas ocorrem de forma gradual e constante ao longo de milhões de anos.
            </p>

            <div className="flex justify-center bg-rose-950 mt-10">
                <Image  
                    src={imagem.url}
                    className="rounded-md shadow-2xl"
                    width={800}
                    height={500}
                    alt="img buraco negro destruindo um planeta" />
            </div>

            <h2 className="font-bold text-4xl text-white mt-10">1. Eventos Catastróficos no Sistema Solar</h2>

            <p className="mt-5 text-white text-lg">
                Velikovsky sugere que, em vez de um sistema solar estável e previsível, houve períodos em que corpos celestes como planetas, cometas ou asteroides tiveram interações violentas e perturbadoras. Essas interações não foram eventos aleatórios, mas encontros próximos entre grandes corpos celestes que resultaram em catástrofes na Terra.
            </p>
            <p className="mt-5 text-white text-lg">
                Por exemplo, Velikovsky acredita que o cometa Vênus, antes de se tornar o planeta que conhecemos hoje, passou próximo à Terra, causando caos.
            </p>

            <h2 className="font-bold text-4xl text-white mt-10">2. Impacto Direto na Terra</h2>

            <p className="mt-5 text-white text-lg">
                Os encontros celestes teriam provocado catástrofes geológicas, como terremotos massivos, erupções vulcânicas, tsunamis e alterações no clima global. Velikovsky também sugere que esses eventos foram responsáveis por mudanças rápidas na orientação do eixo da Terra, o que teria causado mudanças bruscas nas estações, no clima e até na duração dos dias e das noites.
            </p>

            <h2 className="font-bold text-4xl text-white mt-10">3. Múltiplos Encontros Celestes</h2>

            <p className="mt-5 text-white text-lg">
                Além de Vênus, outros planetas como Marte teriam se envolvido em eventos catastróficos subsequentes. Ele argumenta que Marte também passou perto da Terra em várias ocasiões, resultando em novas calamidades. Esses encontros teriam acontecido em períodos relativamente curtos e recentes, dentro da memória da humanidade, levando a uma sucessão de desastres naturais que afetaram profundamente as civilizações antigas.
            </p>

            <h2 className="font-bold text-4xl text-white mt-10">4. Evidências em Textos Antigos</h2>

            <p className="mt-5 text-white text-lg">
                Velikovsky baseia grande parte de sua teoria na correlação entre mitos, lendas e textos religiosos de diversas culturas ao redor do mundo, que descrevem catástrofes globais, como o dilúvio bíblico, incêndios devastadores, períodos de escuridão prolongada e chuva de fogo do céu. Ele interpreta esses relatos como registros de observações reais de eventos astronômicos, interpretados pelas culturas antigas como intervenções divinas ou sobrenaturais.
            </p>

            <h2 className="font-bold text-4xl text-white mt-10">5. Exemplos de Catástrofes</h2>

            <p className="mt-5 text-white text-lg">
                Um dos exemplos citados por Velikovsky é o Êxodo, em que ele sugere que as pragas do Egito, a separação do Mar Vermelho e a escuridão que cobriu a Terra podem ter sido causadas por perturbações cósmicas, resultantes de encontros com o cometa Vênus. Outro exemplo seria o dilúvio global, descrito em muitas culturas, como o da mitologia suméria e grega, que ele atribui a efeitos colaterais dessas perturbações astronômicas, como a movimentação súbita de grandes volumes de água.
            </p>

            <h2 className="font-bold text-4xl text-white mt-10">6. Consequências Físicas para a Terra</h2>

            <p className="mt-5 text-white text-lg">
                O catastrofismo celestial teria consequências físicas notáveis, como a reorientação do eixo da Terra, o que resultaria em mudanças climáticas súbitas, como eras glaciais ou períodos de aquecimento extremo. Velikovsky sugere que as interações entre planetas poderiam causar forças gravitacionais e eletromagnéticas extremas que mexeriam com a crosta terrestre, alterando a geografia do planeta e provocando deslocamentos de grandes massas de terra e água.
            </p>

            <h2 className="font-bold text-4xl text-white mt-10">7. Mudança das Órbitas Planetárias</h2>

            <p className="mt-5 text-white text-lg">
                Em sua teoria, Velikovsky afirma que essas interações também resultaram em mudanças nas órbitas dos planetas. Vênus, por exemplo, teria se estabilizado na órbita atual após suas interações violentas com a Terra e Marte. Essa noção de mudança rápida e drástica nas órbitas planetárias contradiz o modelo científico tradicional, que vê as órbitas como estáveis e evoluindo gradualmente ao longo de bilhões de anos.
            </p>

        </div>
    )
}

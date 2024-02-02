import Image from "next/image"
import { LuBrainCircuit } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { BsQrCode } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";
import { MdOutlineFeedback } from "react-icons/md";


const Benefits = () => {

    const beneficios = [
        {
            id: 1,
            icon:<LuBrainCircuit size={40} className="text-purple-500 mb-5 mt-2" />,
            titulo:'Aprendizado Contínuo',
            texto:'Ao enfrentar um novo projeto a cada semana, os desenvolvedores têm a oportunidade de aprender e experimentar constantemente. Isso promove a pesquisa ativa, a exploração de novas técnicas e a assimilação contínua de conhecimento.'

        },
        {
            id: 2,
            icon:<BsLightningCharge size={40} className="text-purple-500 mb-5 mt-2" />,
            titulo:'Melhoria na Eficiência',
            texto:'A prática regular leva à eficiência. Desenvolver uma landing page semanalmente ajuda a aprimorar o fluxo de trabalho, tornando o desenvolvedor mais ágil e eficiente na implementação de designs e funcionalidades.'

        },
        {
            id: 3,
            icon:<CiCoffeeCup size={40} className="text-purple-500 mb-5 mt-2" />,
            titulo:'Variedade de Desafios',
            texto:'Cada landing page pode apresentar desafios únicos em termos de design, interatividade ou integração com APIs. Isso expõe os desenvolvedores a uma variedade de problemas, incentivando a resolução criativa de problemas.'

        },
        {
            id: 4,
            icon:<BsQrCode size={40} className="text-purple-500 mb-5 mt-2" />,
            titulo:'Construção de Portfólio',
            texto:'Desenvolver uma landing page semanalmente resulta em um portfólio robusto e diversificado. Isso não apenas demonstra a versatilidade do desenvolvedor, mas também fornece exemplos tangíveis de suas habilidades para potenciais empregadores ou clientes.'

        },
        {
            id: 5,
            icon:<SiVisualstudiocode size={40} className="text-purple-500 mb-5 mt-2" />,
            titulo:'Adaptação a Tendências Atuais',
            texto:'O campo do desenvolvimento web está sempre evoluindo. Ao criar landing pages regularmente, os desenvolvedores têm a chance de incorporar as últimas tendências de design, tecnologias e práticas recomendadas em seus projetos.'

        },
        {
            id: 6,
            icon:<MdOutlineFeedback size={40} className="text-purple-500 mb-5 mt-2" />,
            titulo:'Feedback Constante',
            texto:' A exposição frequente ao processo de criação e implementação permite que os desenvolvedores recebam feedback regular. Isso é crucial para o aprimoramento contínuo, ajudando a identificar áreas de melhoria e aperfeiçoar habilidades específicas'

        },
    ]

   return(

        <div>
            <div className="text-white text-center w-full mt-20 py-16 px-4">
                <div className="max-w-[1240px] mx-auto">
                    <div className="justify-center">
                        <p className="color-gradient font-bold uppercase">
                            motivos para aceitar
                        </p>
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                            Quais os beneficios de realizar o desafio?
                        </h1>
                    </div>
                </div>
            </div>
           
            <div className="md:m-20 grid grid-cols-1 gap-4  md:grid-cols-3">
                {beneficios.map((card) => (
                    <div key={card.id} className="box-border grid-cols-3 relative gap-3 p-8 overflow-hidden text-black no-underline border dark:text-white rounded-xl dark:border-neutral-800 m-4">
                        <div className="flex gap-2 items-center">
                            {card.icon}
                            <h3 className="font-bold text-gray-900 font-space-grotesk dark:text-white">
                                {card.titulo}
                            </h3>
                        </div>
                        <p className="opacity-70">
                            {card.texto}
                        </p>
                    </div>
                ))}
            </div>
        </div>
   )  
}

export default Benefits
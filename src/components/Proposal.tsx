import Image from "next/image"

import Girl from "../assets/girl.png"

const Proposal = () => {
    return(
        <div className="text-white w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <Image className="w-[500px] mx-auto my-4" src={Girl} alt="/" /> 
                <div className="flex flex-col justify-center">
                    <p className="color-gradient font-bold uppercase">
                       proposta
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                       Eai Topa o Desafio?
                    </h1>
                    <p className="font-bold">
                        A proposta é transformar suas landing pages em expressões autênticas do seu crescimento no mundo do design e desenvolvimento web. Cada semana é um novo capítulo, uma chance de superar desafios, refinando suas habilidades e compartilhando suas realizações com a comunidade.
                        <br/>
                        Junte-se a nós nesta aventura de inovação e aprendizado, onde cada landing page criada é um passo em direção à excelência e uma celebração do seu progresso contínuo. 
                        <br/>
                        🚀✨ #DesafioLandingPageSemanal   
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Proposal
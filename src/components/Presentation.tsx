import Image from "next/image"

import Computer from "../assets/computer.png"

const Presentation = () => {
    return(
        <div className="text-white w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <Image className="w-[500px] mx-auto my-4" src={Computer} alt="/" /> 
                <div className="flex flex-col justify-center">
                    <p className="color-gradient font-bold uppercase">
                        uma Landing Page por semana
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                       Como funciona o desafio
                    </h1>
                    <p className="font-bold">
                        O desafio de criar uma landing page por semana é uma oportunidade prática para desenvolvedores web aprimorarem suas habilidades em design e codificação. Ao enfrentar projetos semanais, os participantes ganham experiência diversificada, estimulam a criatividade e constroem um portfólio sólido. Este desafio promove aprendizado contínuo e desenvolvimento profissional.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Presentation
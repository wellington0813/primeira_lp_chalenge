import Image from "next/image"

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


import Weto from "../assets/weto.png"
import Link from "next/link";

const Me = () => {
    const icons = [
        {
            icon:<FaLinkedinIn size={20} />,
            link:'https://www.linkedin.com/in/wellington-rodrigues-931902184/'

        },
        {
            icon:<FaGithub size={20}/>,
            link:'https://github.com/wellington0813'

        },
    ]

    return(
        <div className="text-white w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <Image className="w-[400px] mx-auto my-4 rounded-full" src={Weto} alt="/" /> 
                <div className="flex flex-col justify-center">
                    <p className="color-gradient font-bold uppercase">
                        Feito por
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                       Wellington Rodrigues
                    </h1>
                    <p className="color-gradient font-bold uppercase mt-6">
                        Desenvolvedor front-end JR
                    </p>
                    <p className="opacity-70">
                        Graduado em Análise de Sistemas, sou um estudante dedicado com o firme propósito de me tornar um profissional altamente qualificado. Atualmente, estou em busca de desafios que me permitam aprimorar minhas habilidades. Estou comprometido com o aprendizado contínuo e pronto para abraçar novos desafios que me permitirão alcançar meus objetivos profissionais e pessoais.
                    </p>
                    <div className="mt-3">
                        {
                            icons.map((item) =>(
                                <Link href={item.link}>
                                    <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                                        {item.icon}
                                    </button>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me
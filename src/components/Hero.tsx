import { Typed } from "react-typed"
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


const Hero = () => {
    return(
        <div className="text-white">
           <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className="color-gradient font-bold uppercase">Landing Page</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Aprimore seus conhecimentos.</h1>
                <div>
                    <p className="md:text-2xl sm:text-1xl text-xl font-bold text-gray-500">Criando Landing Page para aperfeiçoar</p>
                    <p className="md:text-2xl sm:text-1xl text-xl font-bold text-gray-500"> meus connhecimentos</p>
                </div>
                <div className="flex justify-center mt-3">
                    <div>
                        <Link href='https://www.linkedin.com/in/wellington-rodrigues-931902184/'>
                            <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Contato</button>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://github.com/wellington0813'>
                            <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"><FaGithub size={20} className="inline-flex"/> GitHub</button>
                        </Link>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Hero
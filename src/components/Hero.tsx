import { Typed } from "react-typed"
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const Hero = () => {
    return(
        <div className="text-white">
           <div className="max-w-[800px] mt-[10px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#6040c0] font-bold uppercase">Landing Page</p>
                <h1 className="md:text-6xl sm:text-5xl font-bold md:py-6">Aprimore seus conhecimentos.</h1>
                <div>
                    <p className="md:text-2xl sm:text-1xl text-xl font-bold opacity-40">Criando Landing Page para aperfeiçoar</p>
                    <p className="md:text-2xl sm:text-1xl text-xl font-bold opacity-40"> meus connhecimento em </p>
                   
                </div>
           </div>
        </div>
    )
}

export default Hero
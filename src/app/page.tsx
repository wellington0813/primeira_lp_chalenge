import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import Me from "@/components/Me";
import Image from "next/image";
import Proposal from "@/components/Proposal";

export default function Home() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Presentation/>
       <Benefits/>
       <Proposal/>
       <Me/>
    </div>
  );
}

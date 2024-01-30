'use client'
import React, {useState} from "react";
import {TiThMenu, TiTimes  } from 'react-icons/ti'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-white">
           <h1 className="w-full text-3xl font-bold text">WELL0813.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ?  <TiTimes  size={40}/> :  <TiThMenu size={30}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-700 ease-in-out duratio-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text m-4">WELL0813.</h1>
                <ul className="p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
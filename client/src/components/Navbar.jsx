import React from "react";
import {Link} from "react-router-dom"
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      if(option === "defense"){
        window.location.href="/defense"
    }
    else if(option === "tnpsc"){
        window.location.href="/tnpsc"
    }
    else if(option === "upsc"){
        window.location.href="/upsc"
    }
    else if(option === "ssc"){
        window.location.href="/ssc"
    }
    else if(option === "rrb"){
        window.location.href="/rrb"
    }
    else{
        window.location.href="/"
    }

}
    return (<>

        <div className="bg-gradient-to-l from-green-950 via-green-400 to-teal-700 text-white flex md:flex justify-between items-center max-lg:flex-col font-bold p-4  h-16 w-full ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 from-0% via-slate-50 via-40%  to-85% to-green-950 text-3xl font-bold cursor-pointer  mono">
                TamilVazhi</h1>
            <ul className="flex font-bold text-green-950 font-mono lg:text-2xl left-3/2 space-x-28">
                <li className="p-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-4">
                    <Link to="/">Education</Link>
                </li>
                <li className="p-4 ">
                    <Link to="/dropdown"></Link>
                    <div className="dropdown">
      <button onClick={toggleDropdown} className="">
        Careers
      </button>
      {isOpen && (
        <ul className="dropdown-menu bg-slate-500 border-green-950 grid-rows-4 border-2  text-black">
          <li onClick={() => handleOptionClick('defence')} className="border-2 border-t-black  bg-gray-400">DEFENCE</li>
          <li onClick={() => handleOptionClick('tnpsc')} className="border-2 bg-gray-400">TNPSC</li>
          <li onClick={() => handleOptionClick('upsc')}  className="border-2 bg-gray-400">UPSC</li>
          <li onClick={() => handleOptionClick('ssc')} className="border-2 bg-gray-400">SSC</li>
          <li onClick={() => handleOptionClick('rrb')} className="border-2 bg-gray-400 max-h-max w-full">RRB</li>
        </ul>
      )}
    </div>
                </li>
                
                <li className="p-4 ">
                    <Link to="/">AboutUs</Link>
                </li>              
            </ul>
            <div>
                <button className="bg-gradient-to-r from-orange-600 via-white to-green-950 text-blue-950 items-center leading-4 px-4 py-2 lg:text-xl rounded-2xl">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
        </>
    );
};

export default Navbar;
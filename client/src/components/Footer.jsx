import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-950 via-green-300 to-teal-700 text-white flex md:flex justify-between  max-lg:flex-col font-bold p-0  h-1/4 absolute bottom-0 w-full">
           <div className="flex justify-between space-x-52"> 
            <div className="py-3 text-wrap text-2xl">
                <label  htmlFor="subscribe" className="bg-orange-300 text-black border-orange-500 border-2">Subscribe </label><input className="text-black border-green-500 border-2" type="email" placeholder="Enter your Email" pattern="email" />
                <p className=" bg-white text-sm text-black  items-center fixed bottom-0">Copyright © 2024-2025 Suretrust. All rights reserved.</p>
            </div>
               <ul className="  py-5 text-sm self-center text-blue-950 space-y-3">
                <li className="hover:text-orange-500">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-orange-500"> 
                     <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-orange-500"> 
                     <Link to="/privacy">Privacy&Policy</Link>
                </li>
                <li className="hover:text-orange-500"> 
                     <Link to="/terms">Terms&Condition</Link>
                </li>
               </ul>
           </div>
           <div className="flex space-x-4  h-16 w-fit absolute right-5 bottom-0">
           <a href="https://www.facebook.com"> <img className="hover:cursor-pointer" src="C:\Users\DELL\Desktop\suretrust\client\src\assets\facebook.png" alt="facebook"/></a>
           <a href="https://www.github.com"> <img src="C:\Users\DELL\Desktop\suretrust\client\src\assets\github.png" alt="github"/></a>
            <a href="https://www.linkedin.com"><img src="C:\Users\DELL\Desktop\suretrust\client\src\assets\linkedin.png" alt="linkedin"/></a>
            <a href="https://www.twitter.com"><img src="C:\Users\DELL\Desktop\suretrust\client\src\assets\twitter.png" alt="twitter"/></a>
           </div>         
            </footer>   
    );
};

export default Footer;
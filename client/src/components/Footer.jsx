import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer className="bg-gradient-to-r from-green-950 via-green-300 to-teal-700 text-white flex md:flex justify-between  max-lg:flex-col font-bold p-0  h-1/4 auto bottom-0 w-full">
           <div className="flex justify-between space-x-52"> 
            <div className="py-3 text-wrap text-xl relative left-5">
                <p className="py-3 "> Subscribe to our newsletter</p>
                <label for="email" ><input className="text-black border-green-500 border-2 " type="email" placeholder="Enter your Email" pattern="email" required/><button className="bg-green-950 hover:bg-rose-950 text-white font-bold  p-1 rounded">Subscribe</button></label>  
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
               <div className="flex space-y-1 space-x-4  h-16 w-fit relative right-5 bottom-0 ">
           <a href="https://www.facebook.com" className="hover:scale-110"> <img width="44" height="44" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook"/></a>
           <a href="https://www.github.com" className="hover:scale-110"> <img width="44" height="44" src="https://img.icons8.com/sf-black/64/github.png" alt="github"/></a>
            <a href="https://www.twitter.com"  className="hover:scale-110"><img width="44" height="44" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="linkedin"/></a>
            <a href="https://www.linkedin.com"  className="hover:scale-110"><img width="44" height="44"src="https://img.icons8.com/fluency/48/linkedin.png" alt="twitter"/></a>
           </div>
           </div>
                 
            </footer>
            <div className="flex space-x-4 h-fit w-fit auto right-5 bottom-0">
           <p className=" bg-white text-sm text-black ">Copyright © 2024-2025 Suretrust. All rights reserved.</p>
            </div> 
          </>     
    );
};

export default Footer;
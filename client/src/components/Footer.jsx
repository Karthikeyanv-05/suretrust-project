import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const  Footer=() => {
    return (
    
    
    <>
        <div className="bg-gradient-to-l from-green-950 via-lime-800 to-teal-700 text-white flex md:flex justify-between items-center max-lg:flex-col font-bold p-4  h-16 w-full ">
          <div>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms and Conditions</Link></li>
            </ul>
          </div>
          <div>  <ul>
                <li><link to="https://github.com/Karthikeyanv-05/suretrust-project">Github</link></li>
                <li><link to="https://github.com/Karthikeyanv-05/suretrust-project">Linkedin</link></li>
                <li><link to="https://github.com/Karthikeyanv-05/suretrust-project">Instagram</link></li>
                <li><link to="https://github.com/Karthikeyanv-05/suretrust-project">Twitter</link></li>
            </ul>
            </div>
        </div>
        
        </>
    );
}
export default Footer;
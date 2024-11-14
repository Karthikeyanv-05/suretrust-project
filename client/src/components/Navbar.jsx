import React from "react";

const Navbar = () => {
    return (<>
        <div className="flex justify-between items-center p-4 z-[100] w-full absolute">
            <h1 className="text-red-500 text-3xl font-bold cursor-pointer  mono">
                TamilVazhi            </h1>
            <ul className="flex justify-between ">
                <li className="p-4 cursor-pointer">Home</li>
                <li className="p-4 cursor-pointer">About</li>
                <li className="p-4 cursor-pointer">Services</li>                
                <li className="p-4 cursor-pointer">Contact</li>                
            </ul>
        </div>
        </>
    );
};

export default Navbar;
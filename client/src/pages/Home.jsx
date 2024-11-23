import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

const Home = () => {
    return (
        <>
        <div>
            <Navbar/>
            <Body/>
        <Footer/>
        </div>
        <div>
        
        </div>
        </>
    );
};

export default Home;
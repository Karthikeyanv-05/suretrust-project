import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

const Home = () => {
    return (
        <div>
            <Navbar />
            <Footer/>
        </div>
    );
};

export default Home;
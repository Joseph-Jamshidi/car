import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Layout/Header/Header";
import "./App.css"
import Footer from "./Layout/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/ContactUs" element={<ContactUs/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;
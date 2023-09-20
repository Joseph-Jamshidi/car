import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Layout/Header";
import "./App.css"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
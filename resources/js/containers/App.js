import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// project imports
import List from "../components/products/List";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div style={{ padding: '20px 40px' }}>
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/list" element={<List />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;

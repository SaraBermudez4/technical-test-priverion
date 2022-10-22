import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import List from "../components/products/List";
import NavBar from "../components/NavBar";

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
        </BrowserRouter>
    );
};

export default App;

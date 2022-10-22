import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../components/Create";
import Edit from "../components/Edit";
import List from "../components/List";
import NavBar from "../components/NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div style={{ padding: '20px 40px' }}>
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit" element={<Edit />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

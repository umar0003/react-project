// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Navbar from './component/Navbar'; // Навбари нав илова шуд

function App() {
    return (
        <div>
            <Navbar />

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

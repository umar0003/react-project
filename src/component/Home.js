import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./About";
import Portfolio from "./Portfolio";
import Config from "bootstrap/js/src/util/config";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
    const [bgColor, setBgColor] = useState('#000');

    return (
        <div className={"container-fluid"}>
         <div className="bg-dark text-white d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="text-center">
                <h1>HI I'M JEROME BELL</h1>
                <h2>A Creative Seo <span style={{ color: '#f39c12' }}>Specialist</span></h2>
                <p className="mt-4">
                    Need this? Please Talk &rarr;
                </p>
                </div>
            </div>
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;

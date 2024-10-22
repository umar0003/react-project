import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">My Portfolio</h1>
            <p className="text-center lead">Below are some of my recent works:</p>
            <Slider {...settings}>
                <div className="container">
                    <img
                        src="./img/big-product1.webp"
                        className="img-fluid rounded mb-3"
                        alt="Project 1"
                    />
                    <h4>Project 1: E-commerce Website</h4>
                    <p>This is an e-commerce platform built with React and Node.js.</p>
                </div>
                <div className="container">
                    <img
                        src="./img/big-product2.webp"
                        className="img-fluid rounded mb-3"
                        alt="Project 2"
                    />
                    <h4>Project 2: Business Automation</h4>
                    <p>A comprehensive automation solution developed with Laravel for business process management.</p>
                </div>
                <div className="container">
                    <img
                        src="./img/big-product3.webp"
                        className="img-fluid rounded mb-3"
                        alt="Project 3"
                    />
                    <h4>Project 3: Personal Blog</h4>
                    <p>A personal blog built with Next.js, featuring a clean UI and content management capabilities.</p>
                </div>
                <div className="container">
                    <img
                        src="./img/big-product4.webp"
                        className="img-fluid rounded mb-3"
                        alt="Project 3"
                    />
                    <h4>Project 4: Personal Blog</h4>
                    <p>A personal blog built with Next.js, featuring a clean UI and content management capabilities.</p>
                </div>
                <div className="container">
                    <img
                        src="./img/big-product5.webp"
                        className="img-fluid rounded mb-3"
                        alt="Project 3"
                    />
                    <h4>Project 5: Personal Blog</h4>
                    <p>A personal blog built with Next.js, featuring a clean UI and content management capabilities.</p>
                </div>
                <div className="container">
                    <img
                        src="./img/big-product6.webp"
                        className="img-fluid rounded mb-3"
                        alt="Project 3"
                    />
                    <h4>Project 6: Personal Blog</h4>
                    <p>A personal blog built with Next.js, featuring a clean UI and content management capabilities.</p>
                </div>
            </Slider>
        </div>
    );
}

export default Portfolio;

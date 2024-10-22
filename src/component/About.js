import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src="./img/about1.png"
                        className="img-fluid rounded-circle mb-3"
                        alt="My Profile"
                    />
                </div>
                <div className="col-md-8">
                    <h1>About Me</h1>
                    <p className="lead">Hi! I’m a full-stack developer with expertise in building high-quality, responsive web applications.</p>
                    <p>I specialize in technologies such as React, Node.js, Laravel, and more. With years of experience, I am passionate about creating beautiful and user-friendly solutions.</p>
                    <p>Outside of work, I enjoy learning new technologies, contributing to open-source projects, and collaborating with teams to build innovative solutions.</p>
                </div>
            </div>
        </div>
    );
}

export default About;

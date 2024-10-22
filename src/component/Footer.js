import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div
                style={{
                    backgroundImage: "url('./img/banner-bg1.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flex: 1,
                    color: 'white',
                }}
                className="d-flex justify-content-center align-items-center"
            >
                <div className="text-center">
                    <h1>HI I'M JEROME BELL</h1>
                    <h2>A Creative Seo <span style={{ color: '#f39c12' }}>Specialist</span></h2>
                    <p className="mt-4">
                        Need this? Please Talk &rarr;
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-auto">
                <p>© 2024 My Website. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

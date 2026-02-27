import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Templates from './components/Templates';
import Features from './components/Features';
// import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
    return (
        <div className="dark">
            <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
                <div className="relative min-h-screen overflow-hidden">
                    <Background />

                    <div className="relative z-10 flex flex-col min-h-screen">
                        <Navbar />
                        <Hero />
                        <Steps />
                        <Templates />
                        <Features />
                        {/* <Pricing /> */}
                        <Footer />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

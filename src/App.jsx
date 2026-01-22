import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app">
            <div className="mesh-gradient">
                <div className="mesh-orb orb-blue"></div>
                <div className="mesh-orb orb-cyan"></div>
            </div>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}

export default App;

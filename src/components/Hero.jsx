import React, { useState, useEffect} from 'react'
import "../styles/Hero.css"

const slogans = [
    "Justice and Integrity in Every Step",
    "Your Trusted Legal Partner",
    "Dedicated to Protecting Your Rights",
    "Expert Counsel. Proven Results."
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slogans.length);
        }, 4000); // Change slogan every 4 seconds
        return () => clearInterval(interval);
    }, []);
  return (
    <section className="hero" id="home">
        <div className="overlay"></div>
        <div className="hero-content">
            <h1 className="hero-slogan">{slogans[current]}</h1>
            <div className="hero-buttons">
                <a href="#about" className="btn primary">Learn More</a>
                <a href="#contact" className="btn secondary">Get Legal Help</a>
            </div>
        </div>
    </section>
  )
}

export default Hero
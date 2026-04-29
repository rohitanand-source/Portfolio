import React from "react";
import "../styles/hero.css";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>
            Hi, I'm <span className="gradient-text">R. Anand</span> 👋
          </h1>

          <h2>
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Developer",
                "Node.js Developer",
                "C++ Developer"
              ]}
              loop={true}
              cursor
            />
          </h2>

          <p>
            I build modern, fast and scalable web applications using React &
            Node.js.
          </p>

          <div className="hero-buttons">
              <a href="#projects"><button className="btn primary">View Projects</button></a>
              <a href="#contact"><button className="btn secondary">Contact Me</button></a>
            <a href="/resume.pdf" download><button className="btn secondary">Download Resume</button></a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <img src="/profile.png" alt="profile" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
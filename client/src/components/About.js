import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section id="about" className="about" 
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6}}
    >
    <h2>About Me</h2>
    <p>
      Full Stack Developer with a passion for building modern, high-performance web applications.  

      I specialize in creating seamless user experiences with React and developing scalable backend systems with Node.js & MongoDB.  

      My focus is simple — build clean, efficient, and real-world solutions that make an impact.
    </p>

    </motion.section>
  );
}

export default About;
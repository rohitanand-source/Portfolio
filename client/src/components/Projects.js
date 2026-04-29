import React from "react";
import "../styles/projects.css";
import { Link } from "react-router-dom";
import { scale } from "framer-motion";
import { motion } from "framer-motion";



const projectData = [
  {
    title: "E-Commerce App",
    desc: "Full stack e-commerce app with authentication, cart & payments.",
    tech: ["React", "Node", "MongoDB"],
    image: "/project1.png",
    live: "https://buysmart25.netlify.app/",
    github: "https://github.com/rohitanand-source/buySmart25",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with modern UI & animations.",
    tech: ["React", "CSS"],
    image: "/project2.png",
    live: "#",
    github: "#",
  },
  {
    title: "Mini Game",
    desc: "Fun interactive game built using React.",
    tech: ["React"],
    image: "/project3.png",
    live: "https://rushrunnerx.netlify.app/",
    github: "https://github.com/rohitanand-source/endless-runner-game",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <button className="btn primary glow">My Projects</button>
      <div className="project-container">
        {projectData.map((proj, index) => (
      <motion.div className="project-card" whileHover={{scale:1.05}} transition={{duration:0.3}} key={index}>
            
            <Link to={`/project/${index}`}>
              <img src={proj.image} alt={proj.title} />
            </Link>

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={proj.live} target="_blank">
                  <button className="btn primary">Live</button>
                </a>

                <a href={proj.github} target="_blank">
                  <button className="btn secondary">Code</button>
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
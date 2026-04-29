import React from "react";
import { useParams } from "react-router-dom";
import "../styles/projectDetails.css";

const projects = [
  {
    title: "E-Commerce App",
    desc: "Full stack e-commerce app",
    image: "/project1.png",
    features: [
      "User authentication",
      "Add to cart",
      "Payment integration",
    ],
    tech: ["React", "Node", "MongoDB"],
    live: "https://buysmart25.netlify.app/",
    github: "https://github.com/rohitanand-source/buySmart25",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with modern UI & animations.",
    tech: ["React", "CSS","Node.js","MongoDb"],
    image: "/project2.png",
    features: [
      "Portfolio Website",
      "All Projects",
    ],
    live: "",
    github: ""
  },
  {
    title: "Mini Game",
    desc: "Fun interactive game built using React.",
    tech: ["React","CSS"],
    image: "/project3.png",
        features: [
      "User authentication",
      "Add to cart",
      "Payment integration",
    ],
    live: "https://rushrunnerx.netlify.app/",
    github: "https://github.com/rohitanand-source/endless-runner-game",
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <section className="project-details">

      <h1>{project.title}</h1>

      <img src={project.image} alt={project.title} />

      <p>{project.desc}</p>

      <h3>Features</h3>
      <ul>
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h3>Tech Stack</h3>
      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="links">
        <a href={project.live} target="_blank">Live Demo</a>
        <a href={project.github} target="_blank">GitHub</a>
      </div>

    </section>
  );
}

export default ProjectDetails;
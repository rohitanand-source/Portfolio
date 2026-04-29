import React from "react";
import "../styles/skills.css";

function Skills() {
  const skills = ["React", "Node.js", "MongoDB", "C++"];

  return (
    <section className="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
import React from "react";
import "./Skills.css"; 

const skills = [
  { name: "JavaScript", icon: "/tech-icons/javascript.png" },
  { name: "TypeScript", icon: "/tech-icons/typescript.png" },
  { name: "React", icon: "/tech-icons/react-js.png" },
  { name: "TailwindCSS", icon: "/tech-icons/tailwind-css.png" },
  { name: "CSS3", icon: "/tech-icons/css3.png" },

  { name: "Node.js", icon: "/tech-icons/node-js.png" },
  { name: "MongoDB", icon: "/tech-icons/mongodb.png" },

  { name: "REST API", icon: "/tech-icons/rest-api.png" },
  { name: "JEST", icon: "/tech-icons/jest.png" },

  { name: "Git", icon: "/tech-icons/git.png" },
  { name: "Docker", icon: "/tech-icons/docker.png" },

];


const Skills = () => {
    return (
        <div id="skills" className="skills-section">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-container">
                {skills.map(({ name, icon }) => (
                    <div key={name} className="skill-card">
                        <img src={icon} alt={name} className="skill-icon" />
                        <span className="skill-name">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

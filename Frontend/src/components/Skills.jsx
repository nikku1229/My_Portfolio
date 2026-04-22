import React from "react";
import skillsLogos from "../assets/skill_logos/LogoSkills";

const extendedLogos = [...skillsLogos, ...skillsLogos];

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-section">
        {extendedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Skill ${index + 1}`}
            className="skill-logo"
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;

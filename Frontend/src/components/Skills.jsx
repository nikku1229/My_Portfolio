import React from "react";
import skillsLogos from "../assets/skill_logos/LogoSkills";
import { useAnchor } from "../context/AnchorContext";

const extendedLogos = [...skillsLogos, ...skillsLogos];

function Skills() {
  const { skillsRef } = useAnchor();

  return (
    <div className="skills-container" ref={skillsRef}>
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

import React from 'react';
import "../App.css";

// Correct & safe imports – these icons actually exist
import { FaPalette, FaFont, FaMobileAlt, FaVectorSquare } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";           // Figma is in FA6 now
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiFigma as SiFigmaFallback,   // fallback if you prefer simple-icons version
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Flyers",       icon: <SiAdobephotoshop /> },
    { name: "Poster",     icon: <SiAdobeillustrator /> },
    { name: "Brochure",           icon: <FaFigma /> },              // Using FA6 version (clean & monochrome)
    // { name: "Figma",        icon: <SiFigmaFallback /> },    // Uncomment for colored Figma logo
    { name: "Magazine Design",        icon: <FaPalette /> },
    { name: "Business Card",      icon: <FaFont /> },
    { name: "Letter Head",    icon: <FaMobileAlt /> },
    { name: "Logo Formation",   icon: <FaVectorSquare /> },
    { name: "Invitaion Card",        icon: <FaPalette /> },
    { name: "Birthday Designs",      icon: <FaFont /> },
    { name: "General Printing",    icon: <FaMobileAlt /> },
    { name: "Magazine Design",   icon: <FaVectorSquare /> },
    { name: "Magazine Design",   icon: <FaVectorSquare /> },

  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp;Services</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
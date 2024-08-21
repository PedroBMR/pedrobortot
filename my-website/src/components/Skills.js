// Skills.js
import React from 'react';
import './Skills.css';
import unityIcon from '../components/assets/tech-icons/unity.svg';
import csharpIcon from '../components/assets/tech-icons/csharp.svg';
// Import other skill icons as needed

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <img src={unityIcon} alt="Unity" />
          <span>Unity</span>
        </div>
        <div className="skill-item">
          <img src={csharpIcon} alt="C#" />
          <span>C#</span>
        </div>
        {/* Add more skill items here */}
      </div>
    </section>
  );
}

export default Skills;

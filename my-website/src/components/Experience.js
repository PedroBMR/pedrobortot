// Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Game Designer',
      company: 'Arcadia Realms',
      duration: 'Jan 2020 - Present',
      description: 'Leading the design and development of an MMORPG focused on immersive storytelling and world-building.',
    },
    {
      title: '3D Artist',
      company: 'Freelance',
      duration: 'Jul 2018 - Dec 2019',
      description: 'Created 3D models and assets for various indie game projects using Blender and Substance Painter.',
    },
    {
      title: 'Software Developer',
      company: 'Tech Park',
      duration: 'Feb 2016 - Jun 2018',
      description: 'Developed interactive virtual environments for the visualization and management of a technological park.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Project Manager',
      company: 'Universidade do Vale do Itajaí',
      duration: 'August 2017 - December 2017',
      description: 'Managed a college project during an internship for the university.',
    },
    {
      title: 'UI/UX Intern',
      company: 'Tentáculo',
      duration: 'February 2020 - April 2020',
      description: 'Involved in the design and development of user interfaces and user experiences, focusing on optimizing interaction and visual appeal for gaming applications.',
    },
    {
      title: 'Layout Designer',
      company: 'HUNER',
      duration: 'May 2020 - December 2020',
      description: 'Responsible for the layout and visual aspects of digital content, applying design principles to ensure readability and user engagement. Utilized various software tools to create aesthetically pleasing and functional designs, improving content delivery and user satisfaction.',
    },
    {
      title: 'Head of Scenery and Props Section',
      company: 'Department of Education',
      duration: 'April 2021 - July 2022',
      description: 'Led the creation of educational videos and 3D-printed tools to enhance learning. Developed a tablet-based game for classrooms, integrating gamification into education.',
    },
    {
      title: 'Head of Projects Section',
      company: 'Department of Science, Technology, and Innovation',
      duration: 'July 2022 - July 2023',
      description: 'Oversaw innovative projects, including VR applications, and managed the 3D Printing Lab, reducing costs and improving service delivery.',
    },
    {
      title: 'Professor',
      company: 'Mk Academy',
      duration: 'April 2023 - November 2023',
      description: 'As a professor at Mk Academy, I taught subjects such as Pro Player in Valorant and COD: Modern Warfare, as well as Game Art classes, where students learned to use tools for developing 2D and 3D game art.',
    },
    {
      title: 'Infrastructure Sector Advisor',
      company: 'Department of Science, Technology, and Innovation',
      duration: 'July 2023 - Present',
      description: "Led key projects and managed the city's technological infrastructure, ensuring effective system implementation and maintenance.",
    },
    {
      title: 'English Language Teacher',
      company: 'Fisk',
      duration: 'August 2024 - Present',
      description: "Currently teaching English language classes to students of varying proficiency levels in an in-person setting.",
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

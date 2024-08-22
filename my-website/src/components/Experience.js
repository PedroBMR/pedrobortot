// Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Project Manage',
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
      description: 'Developed and implemented a series of educational videos featuring custom-designed mascots to communicate important dates and events to children, enhancing educational outreach and engagement. Utilized 3D printing technology to create tangible educational objects and tools for school environments, fostering interactive learning experiences. Designed and developed a tablet-based game focused on improving educational outcomes, which was integrated into classroom activities to assist in learning through gamification. Managed the entire project lifecycle, from initial conceptual design to execution, ensuring that projects aligned with educational goals and achieved significant impact among students.',
    },
    {
      title: 'Head of Projects Section',
      company: 'Department of Science, Technology, and Innovation',
      duration: 'July 2022 - July 2023',
      description: 'Supervised the development and implementation of innovative projects, including virtual reality applications, to enhance public interaction with technology and improve service delivery.Managed the 3D Printing Lab, utilizing additive manufacturing technologies to produce cost-effective solutions for various municipal departments, significantly reducing operational expenses. Directed multidisciplinary teams, ensuring projects were delivered on time, within budget, and maintained high standards of quality and efficiency.',
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
      description: "Led and managed key projects related to the city's technological infrastructure, ensuring the effective implementation and maintenance of critical systems. Oversaw contracts associated with technological projects, ensuring they met all legal standards and operational requirements. Collaborated with technical teams to ensure that the infrastructure supported the city's ongoing needs, focusing on system functionality and efficiency. Directed the management of the building's technological infrastructure, maintaining high standards of operational excellence to support various municipal activities.",
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

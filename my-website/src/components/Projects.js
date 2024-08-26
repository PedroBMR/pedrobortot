import React from 'react';
import './Projects.css';
import unityIcon from '../components/assets/tech-icons/unity.svg';
import csharpIcon from '../components/assets/tech-icons/csharp.svg';
import blenderIcon from '../components/assets/tech-icons/blender.svg';
import photoshopIcon from '../components/assets/tech-icons/photoshop.svg';
import vrIcon from '../components/assets/tech-icons/vr.svg';
import mayaIcon from '../components/assets/tech-icons/maya.svg';
import max3dsIcon from '../components/assets/tech-icons/3dsmax.svg';
import androidIcon from '../components/assets/tech-icons/android.svg';
import substancepainter from '../components/assets/tech-icons/substance-painter.svg';
import xtaon from '../components/assets/xtaon.jpg';
import litterman from '../components/assets/Litterman.jpg';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução

function Projects() {
  const { t } = useTranslation(); // Acessa a função t para usar traduções

  const projects = [
    {
      title: t('projects.list.0.title'),
      description: (
        <div>
          <p>{t('projects.list.0.description')}</p>
        </div>
      ),
      video: "https://www.youtube.com/embed/s9nfFplwr60?si=jYkn5q9rJ1f4iIMe",
      tech: [
        { name: "Unity", icon: unityIcon },
        { name: "C#", icon: csharpIcon },
        { name: "3ds Max", icon: max3dsIcon },
        { name: "Maya", icon: mayaIcon },
        { name: "Photoshop", icon: photoshopIcon },
      ],
      reverse: false,
    },
    {
      title: t('projects.list.1.title'),
      description: (
        <div>
          <p>{t('projects.list.1.description')}</p>
        </div>
      ),
      video: "https://www.youtube.com/embed/zLuvuI2-xpw?si=RhfhEuDnlgWUT5bH",
      tech: [
        { name: "Unity", icon: unityIcon },
        { name: "C#", icon: csharpIcon },
        { name: "VR SDK", icon: vrIcon },
        { name: "3ds Max", icon: max3dsIcon },
        { name: "Maya", icon: mayaIcon },
        { name: "Substance Painter", icon: substancepainter },
        { name: "Android", icon: androidIcon },
      ],
      reverse: true,
    },
    {
      title: t('projects.list.2.title'),
      description: (
        <div>
          <p>{t('projects.list.2.description')}</p>
        </div>
      ),
      image: xtaon,
      tech: [
        { name: "Substance Painter", icon: substancepainter },
      ],
      reverse: true,
    },
    {
      title: t('projects.list.3.title'),
      description: (
        <div>
          <p>{t('projects.list.3.description')}</p>
        </div>
      ),
      image: litterman,
      tech: [
        { name: "Unity", icon: unityIcon },
        { name: "Substance Painter", icon: substancepainter },
        { name: "Blender", icon: blenderIcon },
      ],
      reverse: false,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>{t('projects.title')}</h2> {/* Título traduzido */}
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-container ${
            project.reverse ? "reverse" : ""
          }`}
        >
          {project.video ? (
            <div className="project-video">
              <iframe
                width="100%"
                height="315"
                src={project.video}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="project-image">
              <img src={project.image} alt={`${project.title} screenshot`} />
            </div>
          )}
          <div className="project-content">
            <h3>{project.title}</h3>
            {project.description}
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <div key={techIndex} className="tech-item">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="tech-icon"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;

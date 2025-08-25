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
      id: "project-0",
      title: t('projects.list.0.title'),
      description: (
        <div>
          <p>{t('projects.list.0.description')}</p>
        </div>
      ),
      video: "https://www.youtube.com/embed/s9nfFplwr60?si=jYkn5q9rJ1f4iIMe",
      tech: [
        { id: "project-0-unity", name: "Unity", icon: unityIcon },
        { id: "project-0-csharp", name: "C#", icon: csharpIcon },
        { id: "project-0-3dsmax", name: "3ds Max", icon: max3dsIcon },
        { id: "project-0-maya", name: "Maya", icon: mayaIcon },
        { id: "project-0-photoshop", name: "Photoshop", icon: photoshopIcon },
      ],
      reverse: false,
    },
    {
      id: "project-1",
      title: t('projects.list.1.title'),
      description: (
        <div>
          <p>{t('projects.list.1.description')}</p>
        </div>
      ),
      video: "https://www.youtube.com/embed/zLuvuI2-xpw?si=RhfhEuDnlgWUT5bH",
      tech: [
        { id: "project-1-unity", name: "Unity", icon: unityIcon },
        { id: "project-1-csharp", name: "C#", icon: csharpIcon },
        { id: "project-1-vrsdk", name: "VR SDK", icon: vrIcon },
        { id: "project-1-3dsmax", name: "3ds Max", icon: max3dsIcon },
        { id: "project-1-maya", name: "Maya", icon: mayaIcon },
        { id: "project-1-substance-painter", name: "Substance Painter", icon: substancepainter },
        { id: "project-1-android", name: "Android", icon: androidIcon },
      ],
      reverse: true,
    },
    {
      id: "project-2",
      title: t('projects.list.2.title'),
      description: (
        <div>
          <p>{t('projects.list.2.description')}</p>
        </div>
      ),
      image: xtaon,
      tech: [
        { id: "project-2-substance-painter", name: "Substance Painter", icon: substancepainter },
      ],
      reverse: true,
    },
    {
      id: "project-3",
      title: t('projects.list.3.title'),
      description: (
        <div>
          <p>{t('projects.list.3.description')}</p>
        </div>
      ),
      image: litterman,
      tech: [
        { id: "project-3-unity", name: "Unity", icon: unityIcon },
        { id: "project-3-substance-painter", name: "Substance Painter", icon: substancepainter },
        { id: "project-3-blender", name: "Blender", icon: blenderIcon },
      ],
      reverse: false,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>{t('projects.title')}</h2> {/* Título traduzido */}
      {projects.map((project) => (
        <div
          key={project.id}
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
              {project.tech.map((tech) => (
                <div key={tech.id} className="tech-item">
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

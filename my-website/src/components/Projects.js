import React from 'react';
import './Projects.css';
import unityIcon from '../components/assets/tech-icons/unity.svg';
import csharpIcon from '../components/assets/tech-icons/csharp.svg';
import blenderIcon from '../components/assets/tech-icons/blender.svg';
import photoshopIcon from '../components/assets/tech-icons/photoshop.svg';
import unrealEngineIcon from '../components/assets/tech-icons/unreal-engine.svg';
import cppIcon from '../components/assets/tech-icons/cpp.svg';
import vrIcon from '../components/assets/tech-icons/vr.svg';
import mayaIcon from '../components/assets/tech-icons/maya.svg';
import max3dsIcon from '../components/assets/tech-icons/3dsmax.svg';
import androidIcon from '../components/assets/tech-icons/android.svg';
import substancepainter from '../components/assets/tech-icons/substance-painter.svg';
import virtualizacaoParqueTecnologicoImage from '../components/assets/virtualizacao_parque_tecnologico.jpg';
import xtaon from '../components/assets/xtaon.jpg';
import litterman from '../components/assets/Litterman.jpg';

function Projects() {
  const projects = [
    {
      title: "Faces de Charlie",
      description: (
        <div>
          <p>An innovative project that explores the various facets of a character in a dynamic narrative environment. Developed with the goal of creating an immersive game that offers multiple narratives and decisions, directly influencing the characters' fates.</p>
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
      title: "Where Dragons Dwell VR",
      description:(
      <div>
        <p>An immersive virtual reality experience where players explore a world dominated by dragons. In this project, players are thrust into a richly detailed VR environment filled with mythical creatures and ancient landscapes. The game is designed to fully engage the player with dynamic interactions and a deep narrative, where every decision impacts the unfolding story. Explore vast terrains, uncover hidden secrets, and battle dragons in a world where your choices matter.</p>
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
      title: "Virtualização Parque Tecnológico",
      description:(
        <div>
        <p>A project focused on creating an interactive virtual environment for the visualization and management of a technological park. This project aims to develop a highly interactive virtual space that allows users to explore and manage a technological park. The environment is designed to provide a comprehensive view of the park's infrastructure, facilitating planning, decision-making, and operational management. Users can navigate through the virtual space, interact with different elements, and gain insights into the park's functionalities, making it an invaluable tool for both management and presentation purposes.</p>
        </div>
      ),
      image: virtualizacaoParqueTecnologicoImage,
      tech: [
        { name: "Unreal Engine", icon: unrealEngineIcon },
        { name: "C++", icon: cppIcon },
        { name: "Blender", icon: blenderIcon },
        { name: "Substance Painter", icon: substancepainter },
      ],
      reverse: false,
    },
    {
      title: "X-TAON",
      description: (
        <div>
          <p>This project features my final renders for the Allegorithmic X-TAON contest. The piece is now complete, and I'm thrilled to present the finished work. Check out the detailed textures and intricate designs that bring this render to life.</p>
        </div>
      ),
      image: xtaon,
      tech: [
        { name: "Substance Painter", icon: substancepainter },
      ],
      reverse: true,
    },
    {
        title: "Litterman",
        description: (
          <div>
            <p>Litterman is a quirky and challenging game developed for Mini Jam 153: Fishing! In this game, you play as a tiny magnetic character on a mission to fish for trash and earn money to pay his bills. The game presents a unique twist on the fishing genre, focusing on environmental cleanup rather than the usual fish-catching gameplay. Unfortunately, due to time constraints, the game wasn't fully completed before the jam's deadline. As a result, the game currently lacks sound, and there is a bug on Day 2 that makes ascending more difficult, though still possible. Despite these challenges, Litterman offers a fun and engaging experience, and we sincerely appreciate everyone who takes the time to play it.</p>
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
      <h2>My Projects</h2>
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

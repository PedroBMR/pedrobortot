import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import './About.css';

function About() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Ensure THREE is available on window
    window.THREE = THREE;

    // Initialize Vanta effect
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        color: 0x79009e,
        backgroundColor: 0x000000,
        points: 24.0,
        maxDistance: 20.0,
        spacing: 18.0,
        showDots: true,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={vantaRef}>
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am an aspiring game designer passionate about creating immersive worlds and storytelling experiences. 
            With a career that bridges game design, narrative development, and educational technology, I specialize 
            in mechanics, 3D modeling, and programming, particularly in C# and C++.
          </p>
          <p>
            As the founder of Arcadia Realms, I am currently developing an MMORPG designed to unite players through 
            shared adventures and rich narratives. Throughout my career, I have been involved in a variety of innovative 
            projects, including 'Faces de Charlie,' 'Where Dragons Dwell VR,' and 'Virtualização Parque Tecnológico.'
          </p>
          <p>
            Beyond my professional life, I am deeply invested in hobbies like 3D printing, playing Dungeons & Dragons, 
            and exploring a wide variety of digital games. I am always eager to learn and grow, currently expanding my skills 
            in QA, React, and more, with the goal of creating games that entertain and bring people together through shared experiences.
          </p>
        </div>
        <div className="about-image">
          <img src={require('./assets/pedroluiz.jpeg')} alt="Pedro Luiz" />
        </div>
      </div>
    </section>
  );
}

export default About;

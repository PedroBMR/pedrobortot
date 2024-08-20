import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Main.css';
import BackgroundVideo from './BackgroundVideo';

function Main() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["an Aspiring Game Designer", "a 3D Enthusiast", "an Aspiring Level Designer", "an Educator", "a Storyteller", "a Gamer", "a Streamer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content-box">
      <BackgroundVideo />
      <div className="main-section">
        <div className="content">
          <p className="greeting">Hi there!</p>
          <h2>
            <div className="p1">I'm Pedro Luiz,</div>
            <div className="p2">
              <span ref={typedElement}></span>
            </div>
          </h2>
        </div>
        <div className="scroll-down-indicator" onClick={handleScroll}>
          <span className="arrow">↓</span>
        </div>
      </div>
    </div>
  );
}

export default Main;

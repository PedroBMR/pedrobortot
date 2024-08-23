import React from 'react';
import './Skills.css';
import unityIcon from '../components/assets/tech-icons/unity.svg';
import csharpIcon from '../components/assets/tech-icons/csharp.svg';
import blenderIcon from '../components/assets/tech-icons/blender.svg';
import photoshopIcon from '../components/assets/tech-icons/photoshop.svg';
import unrealEngineIcon from '../components/assets/tech-icons/unreal-engine.svg';
import cppIcon from '../components/assets/tech-icons/cpp.svg';
import mayaIcon from '../components/assets/tech-icons/maya.svg';
import max3dsIcon from '../components/assets/tech-icons/3dsmax.svg';
import substancepainter from '../components/assets/tech-icons/substance-painter.svg';
import gamemaker from '../components/assets/tech-icons/game_maker.svg';
import AdobeI from '../components/assets/tech-icons/AI.svg';
import AdobeP from '../components/assets/tech-icons/AP.svg';
import AfterE from '../components/assets/tech-icons/AE.svg';
import git from '../components/assets/tech-icons/github.svg';
import react from '../components/assets/tech-icons/react.svg';
import godot from '../components/assets/tech-icons/Godot_icon.png';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <img src={unityIcon} alt="Unity" style={{ filter: 'brightness(0) invert(1)' }} />
          <span>Unity</span>
        </div>
        <div className="skill-item">
          <img src={unrealEngineIcon} alt="Unreal Engine" style={{ filter: 'brightness(0) invert(1)' }} />
          <span>Unreal Engine</span>
        </div>
        <div className="skill-item">
          <img src={gamemaker} alt="Game Maker" style={{ filter: 'brightness(0) invert(1)' }} />
          <span>Game Maker</span>
        </div>
        <div className="skill-item">
          <img src={godot} alt="Godot" />
          <span>Godot</span>
        </div>
        <div className="skill-item">
          <img src={blenderIcon} alt="Blender" />
          <span>Blender</span>
        </div>
        <div className="skill-item">
          <img src={max3dsIcon} alt="3Ds" />
          <span>3DS Max</span>
        </div>
        <div className="skill-item">
          <img src={mayaIcon} alt="Maya" />
          <span>Maya</span>
        </div>
        <div className="skill-item">
          <img src={AdobeP} alt="Adobe Photoshop" />
          <span>Adobe Photoshop</span>
        </div>
        <div className="skill-item">
          <img src={AdobeI} alt="Adobe Illustrator" />
          <span>Adobe Illustrator</span>
        </div>
        <div className="skill-item">
          <img src={substancepainter} alt="Substance" />
          <span>Substance Painter</span>
        </div>
        <div className="skill-item">
          <img src={AfterE} alt="After Effects" />
          <span>After Effects</span>
        </div>
        <div className="skill-item">
          <img src={AdobeP} alt="Adobe Premiere" />
          <span>Adobe Premiere</span>
        </div>
        <div className="skill-item">
          <img src={photoshopIcon} alt="Adobe Photoshop" />
          <span>Adobe Photoshop</span>
        </div>
        <div className="skill-item">
          <img src={csharpIcon} alt="C#" />
          <span>C#</span>
        </div>
        <div className="skill-item">
          <img src={cppIcon} alt="C++" />
          <span>C++</span>
        </div>
        <div className="skill-item">
          <img src={react} alt="React" />
          <span>React</span>
        </div>
        <div className="skill-item">
          <img src={git} alt="Github" style={{ filter: 'brightness(0) invert(1)' }} />
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;

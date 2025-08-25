import React from 'react';
import './BackgroundVideo.css';
import bgVideo from './assets/BG.mp4';

function BackgroundVideo() {
  return (
    <div className="background-video">
      <video autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>
  );
}

export default BackgroundVideo;


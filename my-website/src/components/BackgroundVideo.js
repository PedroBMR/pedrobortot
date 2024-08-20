import React from 'react';
import './BackgroundVideo.css';

function BackgroundVideo() {
  return (
    <div className="background-video">
      <video autoPlay muted loop playsInline>
      <source src={require('./assets/BG.mp4')} type="video/mp4" />
      </video>
      <div className="overlay"></div> {/* O overlay precisa estar aqui */}
    </div>
  );
}

export default BackgroundVideo;


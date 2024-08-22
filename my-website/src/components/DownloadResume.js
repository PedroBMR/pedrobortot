import React from 'react';
import './DownloadResume.css';
import resume from '../components/assets/resume.pdf';

function DownloadResume() {
  return (
    <section id="download-resume" className="download-resume-section">
      <h2>Download My Resume</h2>
      <p>Click the button below to download a PDF version of my resume.</p>
      <a href={resume} download className="download-btn">
        Download Resume
      </a>
    </section>
  );
}

export default DownloadResume;

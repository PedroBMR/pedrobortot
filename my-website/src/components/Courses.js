import React from 'react';
import './Courses.css';
import { useTranslation } from 'react-i18next';

function Courses() {
  const { t } = useTranslation();

  const courses = t('courses.list', { returnObjects: true });
  const aluraCertificates = t('courses.certificatesAlura', { returnObjects: true });

  return (
    <section id="courses" className="courses-section">
      <h2>{t('courses.title')}</h2>
      <div className="certificates-container">
        <a 
          href={aluraCertificates.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="certificate-link"
        >
          {aluraCertificates.text}
        </a>
      </div>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h3>{course.title}</h3>
            <h4>{course.provider}</h4>
            <span className="date">{course.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

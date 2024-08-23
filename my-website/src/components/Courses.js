import React from 'react';
import './Courses.css';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução

function Courses() {
  const { t } = useTranslation(); // Acessa a função t para usar traduções

  const courses = t('courses.list', { returnObjects: true }); // Carrega a lista de cursos traduzidos

  return (
    <section id="courses" className="courses-section">
      <h2>{t('courses.title')}</h2> {/* Título traduzido */}
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

import React from 'react';
import './Courses.css';

function Courses() {
  const courses = [
    {
      title: "Bachelor's Degree in Game Design",
      provider: 'Univali',
      date: '2016 - 2020',
    },
    {
      title: 'Blender Training',
      provider: 'Alura',
      date: 'Completed February 2023',
    },
    {
      title: 'Props for Games Training',
      provider: 'Alura',
      date: 'Completed February 2023',
    },
  ];

  return (
    <section id="courses" className="courses-section">
      <h2>Courses & Certifications</h2>
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

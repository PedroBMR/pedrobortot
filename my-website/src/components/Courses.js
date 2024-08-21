import React from 'react';
import './Courses.css';

function Courses() {
  const courses = [
    {
      title: 'Game Development Fundamentals',
      provider: 'Coursera',
      date: 'Completed July 2023',
      description: 'A comprehensive course covering the basics of game development, including game mechanics, design principles, and development tools.',
    },
    {
      title: 'C# Programming for Unity Game Development',
      provider: 'Udemy',
      date: 'Completed March 2023',
      description: 'An in-depth course on C# programming focused on Unity game development, covering scripting, debugging, and game logic implementation.',
    },
    {
      title: 'Advanced 3D Modeling with Blender',
      provider: 'LinkedIn Learning',
      date: 'Completed November 2022',
      description: 'A course on advanced 3D modeling techniques using Blender, including sculpting, texturing, and rendering.',
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
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

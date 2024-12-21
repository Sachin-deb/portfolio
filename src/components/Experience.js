import React, { useState } from 'react';
import Section from './Section';

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const experiences = [
    {
      company: "Chaldal",
      title: "Level-2 Software Engineer",
      duration: "July 2024 – Present",
      summary: "Worked on cutting-edge mobile and backend features, enhancing user experience and operational efficiency.",
      details: (
        <div className="experience-details-content">
          <h4>Responsibilities:</h4>
          <ul className="experience-details-list">
            <li>
              <span className="bullet-icon">🛠️</span>
              Maintained the Grocery codebase using technologies like .NET, F#, TypeScript, and React Native.
            </li>
            <li>
              <span className="bullet-icon">📱</span>
              Contributed to the Chaldal mobile app by implementing the **ASAP (As Soon As Possible)** feature, allowing users to get the fastest possible delivery slot.
              <br />
              <em>Role:</em> Frontend developer for the mobile app, ensuring smooth integration of the feature in the latest app version.
            </li>
            <li>
              <span className="bullet-icon">💳</span>
              Fully developed the backend for <a href="https://chaldal.com/financing" target="_blank" rel="noopener noreferrer">Chaldal Financing</a>, integrating APIs to facilitate seamless financing options for users.
            </li>
            <li>
              <span className="bullet-icon">🎯</span>
              Implemented features like Employee Discount and First App Order Discount.
            </li>
            <li>
              <span className="bullet-icon">🚢</span>
              Extensive experience with Docker and Kubernetes for containerized application deployment.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Section title="Software Industry Experience">
      <ul className="experience-list">
        {experiences.map((experience, index) => (
          <li key={index} className="experience-item">
            <div className="experience-header" onClick={() => toggleDropdown(index)}>
              <h3>{experience.company}: {experience.title}</h3>
              <span className="dropdown-icon">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            <p className="experience-duration">{experience.duration}</p>
            <p>{experience.summary}</p>
            {activeIndex === index && (
              <div className="experience-details">
                {experience.details}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Experience;

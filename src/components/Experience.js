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
          <h4>Responsibilities</h4>
          <div className="experience-details-list">
            <div className="experience-item">
              <span className="bullet-icon">🛠️</span>
              <p>Maintained the Grocery codebase using technologies like .NET, F#, TypeScript, and React Native.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">📱</span>
              <p>
                Contributed to the Chaldal mobile app by implementing the <strong>ASAP (As Soon As Possible)</strong> feature, allowing users to get the fastest possible delivery slot.
              </p>
              <p><em>Role:</em> Frontend developer for the mobile app, ensuring smooth integration of the feature in the latest app version.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">💳</span>
              <p>
                Fully developed the backend for <a href="https://chaldal.com/financing" target="_blank" rel="noopener noreferrer">Chaldal Financing</a>, integrating APIs to facilitate seamless financing options for users.
              </p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">🎯</span>
              <p>Implemented features like Employee Discount and First App Order Discount.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">🚢</span>
              <p>Extensive experience with Docker and Kubernetes for containerized application deployment.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section title="Software Industry Experience">
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header" onClick={() => toggleDropdown(index)}>
              <div className="experience-title">
                <h3>{experience.company}: {experience.title}</h3>
                <span className="dropdown-icon">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <p className="experience-duration">{experience.duration}</p>
              <p className="experience-summary">{experience.summary}</p>
            </div>
            {activeIndex === index && (
              <div className="experience-details">
                {experience.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;

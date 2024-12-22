import React, { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import ContestAchievements from './ContestAchievements';
import Contact from './Contact';
import Research from './Research';

function Tabs() {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Achievements':
        return <ContestAchievements />;
      case 'Contact':
        return <Contact />;
      case 'Research':
        return <Research />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="tabs">
        <button className={activeTab === 'About' ? 'active' : ''} onClick={() => setActiveTab('About')}>
          About
        </button>
        <button className={activeTab === 'Research' ? 'active' : ''} onClick={() => setActiveTab('Research')}>
          Research
        </button>
        <button className={activeTab === 'Projects' ? 'active' : ''} onClick={() => setActiveTab('Projects')}>
          Projects
        </button>
        <button className={activeTab === 'Experience' ? 'active' : ''} onClick={() => setActiveTab('Experience')}>
          Experience
        </button>
        <button className={activeTab === 'Achievements' ? 'active' : ''} onClick={() => setActiveTab('Achievements')}>
          Achievements
        </button>
        <button className={activeTab === 'Contact' ? 'active' : ''} onClick={() => setActiveTab('Contact')}>
          Contact
        </button>
      </nav>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default Tabs;

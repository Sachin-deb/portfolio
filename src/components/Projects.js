import React, { useState } from 'react';
import Section from './Section';

function Projects() {
  const projects = [
    {
      name: "FoodFly",
      tech: "Node, Express, React, MongoDB, Bootstrap",
      description: "Online food delivery application with features like location-based searching, food ordering, and restaurant owner access.",
      link: "https://github.com/Mamun097/FoodFly",
      details: (
        <>
          <h4>Account Types</h4>
          <ul>
            <li>Customer</li>
            <li>Restaurant</li>
            <li>Delivery Person</li>
            <li>Home Kitchen (For entrepreneurs selling homemade foods)</li>
          </ul>
          <h4>Features</h4>
          <h5>Customer</h5>
          <ul>
            <li>Browse all open restaurants</li>
            <li>Add/Remove restaurants to/from favorites</li>
            <li>Rate and review restaurants</li>
            <li>View popular restaurants based on ratings</li>
            <li>View temporarily closed restaurants</li>
            <li>Search restaurants by name or location</li>
          </ul>
          <h5>Restaurant</h5>
          <ul>
            <li>Manage food items (add, edit, delete)</li>
            <li>Set food item stock status</li>
            <li>Update operational status (Open/Closed)</li>
            <li>Accept or reject orders</li>
          </ul>
          <h5>Delivery Person</h5>
          <ul>
            <li>Assigned orders based on proximity to restaurants</li>
            <li>Update order statuses (e.g., Cooking, On the Way)</li>
          </ul>
        </>
      ),
    },
    {
      name: "SQuirreL",
      tech: "Node, Express, Ejs, Bootstrap, Oracle Database",
      description: "Online bookshop with admin features like managing books and users.",
      link: "https://github.com/TamimEhsan/SQuirreL",
      details: (
        <>
          <h4>Features</h4>
          <ul>
            <li>Admin can add, edit, or delete books</li>
            <li>Manage authors and categories</li>
            <li>Customers can browse and purchase books online</li>
            <li>Includes an online payment gateway</li>
          </ul>
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Section title="Projects">
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <div className="project-header" onClick={() => toggleDropdown(index)}>
              <strong>{project.name}</strong> ({project.tech})
              <span className="dropdown-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            <p>{project.description} <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a></p>
            {activeIndex === index && (
              <div className="project-details">
                {project.details}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;

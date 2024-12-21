import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="profile-picture-container">
        <img
            src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/448165444_835875758452163_7814395631576015698_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEDEen2WJCx37XwFpoTElLBmL7F_5qUk-eYvsX_mpST5zYXL7Lm2Fl2bs_jReHT90mQoywi69SSmKuw2bWej9a4&_nc_ohc=OmA-IndpQY8Q7kNvgEc9ZTn&_nc_zt=24&_nc_ht=scontent.fdac14-1.fna&_nc_gid=A8-_VLTh7EFQc2xHhv35Y5F&oh=00_AYA1dL67Cydld7TqwCEawE5CrIi8QwLHVnaLRLa9xb2krw&oe=676C8271"
            alt="Sachin Deb"
            className="profile-picture"
        />
      </div>
      <h2>Sachin Deb</h2>
      <p>Level-2 Software Engineer at Chaldal.tech</p>
      <p>
        I specialize in full-stack development, competitive programming. 
        My work focuses on delivering scalable and efficient software solutions.
      </p>
      <h3>Research and Interests</h3>
      <ul className="interests-list">
        <li>Undergraduate research focused on federated learning.</li>
        <li>Interested in pursuing a PhD in Federated Learning, Human-Computer Interaction, Software Engineering.</li>
      </ul>
      <h3> Teaching Experience </h3>
      <ul className="interests-list">
        <li>Competitive Programming Trainer: Bangladesh University of Business and Technology.</li>
        <li>Competitive Programming Trainer: International University of Business Agriculture and Technology.</li>
    </ul>
    </div>
  );
}

export default About;

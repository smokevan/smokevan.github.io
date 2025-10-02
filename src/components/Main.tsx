import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/mock01.png';
// project thumbnails are rendered inside Project component

const Main: React.FC = () => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <a href="https://github.com/smokevan" target="_blank" rel="noreferrer">
            <img src={avatar} alt="Avatar" />
          </a>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/smokevan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ism27/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Iván Mokeyev</h1>
          <p>engineer, among other things</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/smokevan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ism27/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>

  {/* Expertise and Project are rendered at App level to avoid duplication */}
    </div>
  );
}

export default Main;
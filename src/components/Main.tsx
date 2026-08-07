import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/profile.png';
// project thumbnails are rendered inside Project component

const REPO = 'smokevan/smokevan.github.io';

const Main: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    // Fetch the most recent commit on `main` so the line stays current
    // automatically without needing a rebuild.
    fetch(`https://api.github.com/repos/${REPO}/commits/main`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        const message = (data?.commit?.message || '').split('\n')[0];
        const isoDate = data?.commit?.committer?.date || data?.commit?.author?.date;
        const date = isoDate
          ? new Date(isoDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : '';
        if (message && date) {
          setLastUpdate(`"${message}" — ${date}`);
        } else if (message) {
          setLastUpdate(`"${message}"`);
        }
      })
      .catch(() => {
        /* leave the line empty if the commit can't be fetched */
      });
  }, []);

  return (
    <div className="container" id="home">
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
          <p>last update - <span className="last-update">{lastUpdate}</span></p>

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

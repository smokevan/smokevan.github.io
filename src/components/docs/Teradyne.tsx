
import React from 'react';
import '../../assets/styles/Documentation.scss';
import teradyne from '../../assets/images/teradyne.png';

const Teradyne = () => (
  <div className="docs-page-wrapper">
    <div className="doc-container docs">
      <a className="back-link" href="#/">← Back</a>
      <h1>Teradyne - FPGA Intern</h1>
      <img src={teradyne} alt="teradyne hero" className="doc-hero" />
      <section className="doc-content">
        <h2>Overview</h2>
        <p>
        Worked on design, verification, and lab validation of high-speed FPGA based hardware for data sequencing, processing, and capture in RF and DCVI automated testing systems.
        </p>
        <h3>Quick links</h3>
        <ul>
          <li><a href="https://github.com/smokevan" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Teradyne;

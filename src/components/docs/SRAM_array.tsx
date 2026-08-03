import React from 'react';
import '../../assets/styles/Documentation.scss';
import mock06 from '../../assets/images/mock06.png';

const SRAM_array = () => (
  <div className="docs-page-wrapper">
    <div className="doc-container docs">
      <a className="back-link" href="#/">← Back</a>
      <h1>Quantum Error Correction Hardware</h1>
      <img src={mock06} alt="QEC hardware hero" className="doc-hero" />
      <section className="doc-content">
        <h2>Overview</h2>
        <p>
          Designing FPGA accelerated hardware and software systems to support the decoding of Quantum Error
          Correction (QEC) codes, beginning with the surface code and moving towards more novel hardware decoding.
        </p>
        <h3>Quick links</h3>
        <ul>
          <li><a href="https://github.com/smokevan" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default SRAM_array;

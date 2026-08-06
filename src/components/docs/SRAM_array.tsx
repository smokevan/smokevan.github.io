import React from 'react';
import '../../assets/styles/Documentation.scss';
import sram_array from '../../assets/images/sram_array.png';

const SRAM_array = () => (
  <div className="docs-page-wrapper">
    <div className="doc-container docs">
      <a className="back-link" href="#/">← Back</a>
      <h1>1kB SRAM array in GPDK045</h1>
      <img src={sram_array} alt="SRAM array hero" className="doc-hero" />
      <section className="doc-content">
        <h2>Overview</h2>
        <p>
        An implementation of a 1kB SRAM array in GPDK045 using Cadence Virtuoso for schematic, layout, and simulation. Included design of 6T bitcell, driver circuits, sense amplifier, and testbenches with correct timing to evaluate read/write performance.
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

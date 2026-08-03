import React from 'react';
import '../../assets/styles/Documentation.scss';
import mock10 from '../../assets/images/mock10.png';
import sysarr_4x4 from '../../assets/images/sysarr_4x4.png';

const C2S2 = () => (
  <div className="docs-page-wrapper">
    <div className="doc-container docs">
      <a className="back-link" href="#/">← Back</a>
      <h1>Cornell Custom Silicon Systems</h1>
      <img src={mock10} alt="project hero" className="doc-hero" />
      <section className="doc-content">
        <h2>Overview</h2>
        <p>
          Cornell Custom Silicon Systems (C2S2) is a student-run organization at Cornell University that focuses on
          designing and fabricating custom integrated circuits (ICs). The team provides students with hands-on
          experience in chip design, layout, and testing, allowing them to apply their theoretical knowledge in a
          practical setting. We collaborate with industry partners and utilize advanced fabrication processes to create
          high-performance and energy-efficient chips for various applications, including communications, signal
          processing, and machine learning.
        </p>
        <h3>Quick links</h3>
        <ul>
          <li><a href="https://c2s2.engineering.cornell.edu/" target="_blank" rel="noreferrer">Project Team Website</a></li>
        </ul>
        <h2>My Role</h2>
        <p>
          As a digital/physical design team member, I contributed to the backend design and physical implementation of
          custom integrated circuits, as well as the development of automation scripts to streamline the design process
          and occasional RTL block design. Some of the tasks, past and current, include:
        </p>
        <ul>
          <li>
            Developed a parametric hierarchical PnR flow for a matrix-multiply accelerator, enabling scalable compilation of large configurations with fast, DRC/LVS-clean turnaround (FA25).
          </li>
          <li>
            Authored Tcl, Bash, and Python tooling for automated PnR and padring generation in a streamlined RTL-to-GDS flow, supporting initial TSMC180 tape-ins and a successful tapeout (SP25).
          </li>
          <li>
            Building a generalized hierarchical flow for the SP26 digital tapeout of a multi-module SoC including an RV32 core, matrix-multiply accelerator, and on-chip memory.
          </li>
        </ul>
        <h2>Parametric Hierarchical Systolic Array Flow</h2>
        <p>For our SP26 tapeout of an SOC for ML applications, we want to have our own SRAM, systolic array matrix multiply accelerator, and a general purpose RISC-V core.
          Compiling large systolic array designs efficiently is crucial for iteration of our physical design flows so we can really optimize for area, considering our tight budget of 1.5 mm^2 on TSMC180. In order
          to do this, I developed a parametric flow for our systolic array RTL design that allows for easy exploration of different array architectures and their trade-offs, as well as easier timing closure, DRC/LVS checks, and parallelization.</p>
        <img src={sysarr_4x4} alt="systolic array 4x4 diagram" className="diagram" />
        <p>
          This flow allows for easy configurations of systolic array designs, such as this pictured 4x4 design open in Innovus, with more focused optimization on the level of the processing elements themselves before performing top-level timing closure.
        </p>
        <h2>Physical Design Flow</h2>
        <p>This flow utilizes Synopsys Design Compiler for synthesis, Cadence Innovus for place and route, and Calibre for implementing DRC/LVS checks and signoff. For flow management, recipes are built using Pyhflow, a python flow management
          tool developed by Prof. Christopher Batten, our faculty project team advisor.
        </p>
      </section>
    </div>
  </div>
);

export default C2S2;

import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock06 from '../assets/images/mock06.png';
import sram_icon from '../assets/images/sram_array.png';
import teradyne from '../assets/images/teradyne.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <>
    <div className="projects-container" id="experiences">
        <h1>Experiences:</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#/docs/c2s2"><img src={teradyne} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/c2s2"><h2>Teradyne</h2></a>
                <a href="#/docs/c2s2"><h3>FPGA Intern</h3></a>
                <p>Worked on design, verification, and lab validation of high-speed FPGA based hardware for data sequencing, processing, and capture in RF and DCVI automated testing systems.</p>
            </div>
            <div className="project">
                <a href="#/docs/c2s2"><img src={mock10} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/c2s2"><h2>Cornell Custom Sillicon Systems</h2></a>
                <a href="#/docs/c2s2"><h3>Physical Design Lead</h3></a>
                <p>Taping out chips as an undergraduate, working on physical design tooling for efficient, customizable flows.</p>
            </div>
            <div className="project">
                <a href="#/docs/QEC_hardware"><img src={mock06} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/QEC_hardware"><h2>Quantum Computing Association</h2></a>
                <a href="#/docs/QEC_hardware"><h3>Hardware Lead</h3></a>
                <p>Designing FPGA accelerated hardware and software systems to support the decoding of Quantum Error Correction codes, beginning with the surface code and moving towards more novel hardware decoding.</p>
            </div>
        </div>
    </div>
    <div className="projects-container" id="projects">
        <h1>Projects and other work:</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#/docs/TRV2_processor"><img src={mock09} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/TRV2_processor"><h2>Multi-core TinyRiscV2 Processor System</h2></a>
                <p>Designed multi-core system with pipelined TRV2 processor in SVerilog from scratch, with a 1-cycle read/write hit cache, NoC with round robin arbitration and least distance routing, branch prediction, and more.</p>
            </div>
            <div className="project">
                <a href="#/docs/SRAM_array"><img src={sram_icon} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/SRAM_array"><h2>1kB SRAM array in GPDK045</h2></a>
                <p>An implementation of a 1kB SRAM array in GPDK045 using Cadence Virtuoso for schematic, layout, and simulation. Included design of 6T bitcell, driver circuits, sense amplifier, and testbenches with correct timing to evaluate read/write performance.</p>
            </div>
        </div>
    </div>
    </>
    );
}

export default Project;

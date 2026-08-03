import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects and other work:</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#/docs/c2s2"><img src={mock10} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/c2s2"><h2>Cornell Custom Sillicon Systems</h2></a>
                <p>Taping out chips as an undergraduate, working on physical design tooling for efficient, customizable flows.</p>
            </div>
            <div className="project">
                <a href="#/docs/TRV2_processor"><img src={mock09} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/TRV2_processor"><h2>Multi-core TinyRiscV2 Processor System</h2></a>
                <p>Designed multi-core system with pipelined TRV2 processor in SVerilog from scratch, with a 1-cycle read/write hit cache, NoC with round robin arbitration and least distance routing, branch prediction, and more.</p>
            </div>
            <div className="project">
                <a href="#/docs/QEC_hardware"><img src={mock06} className="zoom" alt="thumbnail"/></a>
                <a href="#/docs/QEC_hardware"><h2>Quantum Error Correction Hardware</h2></a>
                <p>Designing FPGA accelerated hardware and software systems to support the decoding of Quantum Error Correction codes, beginning with the surface code and moving towards more novel hardware decoding.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;

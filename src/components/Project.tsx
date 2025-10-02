import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>some projects:</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#/docs/c2s2"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#/docs/c2s2"><h2>Cornell Custom Sillicon Systems</h2></a>
                <p>Taping out chips as an undergraduate, working on writing RTL and physical design tooling scripts for efficient, customizable flows.</p>
            </div>
            <div className="project">
                <a href="#/docs/TRV2_processor"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#/docs/TRV2_processor"><h2>TinyRiscV2 Processor</h2></a>
                <p>Designed pipelined microprocessor with forwarding and in SVerilog from scratch, including 32-bit ALU with a variable cycle iterative algorithm for multiplication, streaming memory interface, and TinyRISCV2 instruction set compatibility. Working on multi-core.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
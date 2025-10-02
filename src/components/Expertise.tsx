import React from "react";
/* FontAwesome icons removed — expertise now uses MUI Chips */
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>what i do:</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>Hardware Design</h3>
                    <p>Designing a diverse array of hardware designs from scratch, from RISC-V cores to asynchronous buffers, to custom acceleration modules.</p>
                    <div className="flex-chips"><span className="chip-title">using:</span>
                        <Chip className='chip' label="Verilog" />
                        <Chip className='chip' label="SystemVerilog" />
                        <Chip className='chip' label="Python" />
                        <Chip className='chip' label="C" />
                        <Chip className='chip' label="C++" />
                    </div>
                </div>

                <div className="skill">
                    <h3>Verification and Testing</h3>
                    <p>Setting up verification and testing suites through both four-state, gate-level, and back-annotated methods using open and closed source tools.</p>
                    <div className="flex-chips"><span className="chip-title">using:</span>
                        <Chip className='chip' label="Git" />
                        <Chip className='chip' label="CoCoTB" />
                        <Chip className='chip' label="PyMTL3" />
                        <Chip className='chip' label="Synopsys VCS" />
                        <Chip className='chip' label="Verilator" />
                    </div>
                </div>

                <div className="skill">
                    <h3>Design Implementation</h3>
                    <p>Getting designs on silicon and FPGAs using industry tools, working on multiple tapeouts as an undergraduate, and doing so efficiently with automation and multi-processing techniques</p>
                    <div className="flex-chips"><span className="chip-title">using:</span>
                        <Chip className='chip' label="Synopsys DC & DV" />
                        <Chip className='chip' label="Cadence Innovus" />
                        <Chip className='chip' label="Siemens Calibre" />
                        <Chip className='chip' label="TSMC PDKs" />
                        <Chip className='chip' label="Quartus" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
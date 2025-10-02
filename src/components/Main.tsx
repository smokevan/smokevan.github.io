import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/screenshot.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

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

      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>what i do:</h1>
          <div className="skills-grid">
            <div className="skill">
              <h3>Hardware Design</h3>
              <p>Designing a diverse array of hardware designs from scratch, from RISC-V cores to asynchronous buffers, to custom acceleration modules.</p>
              <div className="flex-chips"><span className="chip-title">using:</span>
                <div className="chip">Verilog</div>
                <div className="chip">SystemVerilog</div>
                <div className="chip">Python</div>
                <div className="chip">C</div>
                <div className="chip">C++</div>
              </div>
            </div>

            <div className="skill">
              <h3>Verification and Testing</h3>
              <p>Setting up verification and testing suites through both four-state, gate-level, and back-annotated methods using open and closed source tools.</p>
              <div className="flex-chips"><span className="chip-title">using:</span>
                <div className="chip">Git</div>
                <div className="chip">CoCoTB</div>
                <div className="chip">PyMTL3</div>
                <div className="chip">Synopsys VCS</div>
                <div className="chip">Verilator</div>
              </div>
            </div>

            <div className="skill">
              <h3>Design Implementation</h3>
              <p>Getting designs on silicon and FPGAs using industry tools, working on multiple tapeouts as an undergraduate, and doing so efficiently with automation and multi-processing techniques</p>
              <div className="flex-chips"><span className="chip-title">using:</span>
                <div className="chip">Synopsys DC &amp; DV</div>
                <div className="chip">Cadence Innovus</div>
                <div className="chip">Siemens Calibre</div>
                <div className="chip">TSMC PDKs</div>
                <div className="chip">Quartus</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div id="contact">
        <div className="items-container">
          <div className="contact_wrapper">
            <h1>Contact:</h1>
            <p>think im useful? shoot me an email at ivansmokeyev@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
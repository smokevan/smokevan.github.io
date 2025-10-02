import React from 'react';
import '../assets/styles/Documentation.scss';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import iter_mul from '../assets/images/mock08.png';

type Props = {
  projectId?: string;
};

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
            Writing scripts in .tcl, bash, and Python for a light but robust RTL → GDS flow with verification signoff
            using FFGL and BAGL testing for Analog/Digital/RF chips with a 20 day turnaround, using Synopsys/Cadence
            tooling, leading to successful tapeout of chips on TSMC180.
          </li>
          <li>
            Using Slurm and tooling scripts to create a parallelized hierarchical flow for recipe execution and
            management to utilize server hardware efficiently.
          </li>
          <li>
            Helping with and understanding the RTL design and verification process to properly plan floorplanning and
            placement strategies when experimenting with SRAMs and other macros.
          </li>
        </ul>
      </section>
    </div>
  </div>
);

const TRV2Processor = () => (
  <div className="docs-page-wrapper">
    <div className="doc-container docs">
      <a className="back-link" href="#/">← Back</a>
      <h1>TinyRiscV2 Processor</h1>
      <img src={mock09} alt="TinyRiscV2 hero" className="doc-hero" />
      <section className="doc-content">
        <h2>Overview</h2>
        <p>
          This is a compact TinyRISCV2 compatible processor implementation, with five forwarded pipeline stages,
          an iterative multiplication unit, a branch target buffer, and more.
        </p>
        <h3>Quick links</h3>
        <ul>
          <li><a href="https://github.com/smokevan" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
        <h2>Design Process</h2>
        <p>
          This processor was in part designed for ECE4750, Computer Architecture, at Cornell University. Using some
          previously verified IP, such as muxes, registers, a regfile, and a memory interface, I designed the
          processor from the ground up in SystemVerilog. This processor uses a common 5-stage pipeline, with instruction
          fetch, decode, execute, memory, and writeback stages. It implements full forwarding and hazard detection to stall
          when necessary for multiplication, processor management, and memory operations.
        </p>
        <h3>Iterative Multiplier</h3>
        <img src={iter_mul} alt="iterative multiplier diagram" className="diagram" />
        <p>
          The iterative multiplier uses a common shift-and-add algorithm to perform multiplication over multiple cycles,
          with a variable latency system to optimize speed by shifting by several indices when many zeroes are present
          in the multiplier or multiplicand. This is handled through a standard val/rdy streaming interface, allowing for
          careful handling of multiplication operations in the pipeline using hazard detection and stalling.
        </p>
      </section>
    </div>
  </div>
);

const TinyRiscV2 = () => (
  <div className="doc-container docs">
    <a className="back-link" href="#/">← Back</a>
    <h1>TinyRiscV2 Processor</h1>
    <img src={mock09} alt="TinyRiscV2 hero" className="doc-hero" />
    <section className="doc-content">
      <h2>Overview</h2>
      <p>
        This is a compact TinyRISCV2 compatible processor implementation, with five forwarded pipeline stages,
        an iterative multiplication unit, a branch target buffer, and more.
      </p>
      <h3>Quick links</h3>
      <ul>
        <li><a href="https://github.com/smokevan" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
      <h2>Design Process</h2>
      <p>
        This processor was in part designed for ECE4750, Computer Architecture, at Cornell University. Using some
        previously verified IP, such as muxes, registers, a regfile, and a memory interface, I designed the
        processor from the ground up in SystemVerilog. This processor uses a common 5-stage pipeline, with instruction
        fetch, decode, execute, memory, and writeback stages. It implements full forwarding and hazard detection to stall
        when necessary for multiplication, processor management, and memory operations.
      </p>
      <h3>Iterative Multiplier</h3>
      <img src={iter_mul} alt="iterative multiplier diagram" className="diagram" />
      <p>
        The iterative multiplier uses a common shift-and-add algorithm to perform multiplication over multiple cycles,
        with a variable latency system to optimize speed by shifting by several indices when many zeroes are present
        in the multiplier or multiplicand. This is handled through a standard val/rdy streaming interface, allowing for
        careful handling of multiplication operations in the pipeline using hazard detection and stalling.
      </p>
    </section>
  </div>
);

const Documentation: React.FC<Props> = ({ projectId }) => {
  const hashId = typeof window !== 'undefined' ? (window.location.hash || '').replace(/^#\/?/, '') : '';
  const inferred = hashId.startsWith('docs/') ? hashId.split('/')[1] : '';
  const id = projectId || inferred || 'c2s2';
  if (!id) return <div className="docs">No project selected</div>;

  switch (id.toLowerCase()) {
    case 'trv2_processor':
    case 'trv2':
      return <TRV2Processor />;
    case 'tinyriscv2':
    case 'tinyriscv':
    case 'tinyrv2':
      return <TinyRiscV2 />;
    case 'c2s2':
    default:
      return <C2S2 />;
  }
};

export default Documentation;

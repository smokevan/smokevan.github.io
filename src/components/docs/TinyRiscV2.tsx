import React from 'react';
import '../../assets/styles/Documentation.scss';
import mock09 from '../../assets/images/mock09.png';
import iter_mul from '../../assets/images/mock08.png';
import cache from '../../assets/images/cache.png';
import network from '../../assets/images/network.png';
import multicore from '../../assets/images/multicore.png';

const TinyRiscV2 = () => (
  <div className="docs-page-wrapper">
    <div className="doc-container docs">
      <a className="back-link" href="#/">← Back</a>
      <h1>Multi-Core TRV2 Processor System</h1>
      <section className="doc-content">
        <h2>Overview</h2>
        <p>
          This is a compact Multi-Core TinyRISCV2 compatible processor system implementation, with five forwarded pipeline stages,
          an iterative multiplication unit, a branch target buffer, a one-hit cycle read/write hit cache, NoC with round robin arbitration and least distance routing, etc.
        </p>
        <h3>Quick links</h3>
        <ul>
          <li><a href="https://github.com/smokevan" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
        <img src={multicore} alt="Multi-Core TRV2 hero" className="doc-hero" />

        <h2>Design Process</h2>
        <p>
          This multi core system was in part designed for ECE4750, Computer Architecture, at Cornell University. Using some
          previously verified IP, such as muxes, registers, a regfile, and a memory interface, I designed the
          processor from the ground up in SystemVerilog. This processor uses a common 5-stage pipeline, with instruction
          fetch, decode, execute, memory, and writeback stages. It implements full forwarding and hazard detection to stall
          when necessary for multiplication, processor management, memory operations, as well as basic branch prediction with a branch target buffer.
        </p>
        <h3>Iterative Multiplier</h3>
        <img src={iter_mul} alt="iterative multiplier diagram" className="diagram" />
        <p>
          The iterative multiplier uses a common shift-and-add algorithm to perform multiplication over multiple cycles,
          with a variable latency system to optimize speed by shifting by several indices when many zeroes are present
          in the multiplier or multiplicand. This is handled through a standard val/rdy streaming interface, allowing for
          careful handling of multiplication operations in the pipeline using hazard detection and stalling.
        </p>
        <h3>Pipelined TRV2 Processor</h3>
        <img src={mock09} alt="TinyRiscV2 hero" className="doc-hero" />

        <p>
          The TinyRiscV2 processor implements a standard 5-stage pipeline with instruction fetch, decode, execute, memory,
          and writeback stages. It supports a subset of the RISC-V instruction set architecture, including arithmetic,
          logical, control flow, and memory operations. The processor features full forwarding to minimize stalls and
          includes hazard detection logic to handle data hazards and control hazards.
        </p>
        <p>
          The pipeline is fully bypassed, as well as implementing simple branch prediction logic using a branch target buffer to
          improve control flow efficiency. This was a difficult but rewarding addition, as it cut down on many squashes from branches, and taught
          a significant amount about proper control flow handling when setting up the logic for flushing the pipeline on mispredictions.
        </p>
        <p>
          Some next steps past this class would be to explore the implementation of superscalar, OOO execution for really aggressive performance optimization, as well as more of the RISC-V ISA. A floating point unit
          would likely be the first next step for that. Much of modern mobile processors such as Apple's M-series laptop chips, which are incredibly power efficient and performant, have very wide execution pipelines for their ARM Aarch-64 cores. This has
          given them a clear edge in the mobile SoC market, and fascinates me as a computer engineer.
        </p>
        <h3>Cache and Memory</h3>
        <img src={cache} alt="cache hero" className="doc-hero" />
        <p>
          To improve memory access, I implemented a 2-way set associative cache with a one cycle read hit and one cycle write hit acknowledgment. These
          aggressive optimizations considerably improved memory performance, with data gathered on performance with and without the optimizations of associativity
          and aggressive hit handling. However, these caches are a very generous model without realistic SRAMs - which would be a next step in continuing this project outside of
          ECE4750, as well as implementing a multi-level cache hierarchy.
        </p>
        <h3>NoC Design</h3>
        <img src={network} alt="NoC hero" className="doc-hero" />
        <p>
          The Network-on-Chip (NoC) design connects multiple TinyRiscV2 cores in a 2D mesh topology, allowing for efficient communication between cores. Subdivided into routers, route units, and switch units,
          the NoC uses simple packet-based communication to inject and eject data. For optimization of this network, I implemented round-robin arbitration for the switch units, as well as least-distance routing for the route units
          to send packets. Due to the arbitration and short distance routing, I also had to implement logic to throttle injections when input queues were nearly full,
          as injecting a packet when the network was congested would cause deadlocks.
        </p>
        <h3>Overall Architecture</h3>
        <p>
          The network was integrated into a Cache Network, a Memory Network, and a Core Network. The cache network was used for creating a shared banked L1 data cache for all cores for coherence,
          while the memory network interface with the private instruction caches, the shared data cache, and the memory simulator. The core network was utilized to connect four cores together, and using provided C libraries for malloc/bthread,
          and other important C functions, I was able to compile simple C programs such as binary searching, an optimized quick sort, image filtering, and matrix multiplication, and vector-vector addition, parallelizing when possible.
          It'd be great to explore the development of these libraries for such a system from scratch, as well as implementing more of the standard RISC-V ISA to run more complex programs.
        </p>
      </section>
    </div>
  </div>
);

export default TinyRiscV2;

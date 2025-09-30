import React from 'react';
import '../assets/styles/Documentation.scss';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import iter_mul from '../assets/images/mock08.png';

type Props = {
  projectId?: string;
};

const C2S2 = () => (
  <div className="docs">
    <h2>c2s2 — Component / System notes</h2>
    <p>This project documents the component-to-system integration. Add your notes and diagrams below.</p>
    <ul>
      <li>Design: simple, componentized UI</li>
      <li>Data flow: event-driven</li>
    </ul>
    <img src={mock09} alt="c2s2 mock" className="diagram" />
  </div>
);

const TRV2Processor = () => (
  <div className="docs">
    <h2>TRV2_processor — Processing pipeline</h2>
    <p>Overview of the TRV2_processor pipeline and transform steps.</p>
    <ol>
      <li>Load input</li>
      <li>Normalize</li>
      <li>Run processor</li>
    </ol>
    <img src={mock10} alt="TRV2 mock" className="diagram" />
    <p>Example iteration diagram:</p>
    <img src={iter_mul} alt="iteration diagram" className="diagram" />
  </div>
);

const Documentation: React.FC<Props> = ({ projectId }) => {
  const id = projectId || (typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : 'c2s2');
  if (!id) return <div className="docs">No project selected</div>;

  switch (id.toLowerCase()) {
    case 'trv2_processor':
    case 'trv2':
      return <TRV2Processor />;
    case 'c2s2':
    default:
      return <C2S2 />;
  }
};

export default Documentation;

import React from 'react';
import C2S2 from './docs/C2S2';
import TinyRiscV2 from './docs/TinyRiscV2';
import QEC_Hardware from './docs/QEC_Hardware';

type Props = {
  projectId?: string;
};

// Registry of documentation pages, keyed by the project id used in the URL
// hash (e.g. `#/docs/c2s2`). To add a new project, create a component under
// `./docs/` and add one entry here — no need to touch the rest of this file.
const DOC_PAGES: Record<string, React.FC> = {
  c2s2: C2S2,
  trv2_processor: TinyRiscV2,
  qec_hardware: QEC_Hardware,
};

const DEFAULT_DOC = 'c2s2';

const Documentation: React.FC<Props> = ({ projectId }) => {
  // Defensive rendering: wrap in try/catch so a runtime error inside docs
  // doesn't unmount the whole app during development. Errors are logged
  // to the console for debugging and a friendly message is shown.
  try {
    const hashId = typeof window !== 'undefined' ? (window.location.hash || '').replace(/^#\/?/, '') : '';
    const inferred = hashId.startsWith('docs/') ? hashId.split('/')[1] : '';
    const id = (projectId || inferred || DEFAULT_DOC).toLowerCase();

    const Page = DOC_PAGES[id] || DOC_PAGES[DEFAULT_DOC];
    return <Page />;
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Documentation render error:', err);
    return (
      <div className="docs">
        <h2>Documentation failed to load</h2>
        <p>There was an error rendering this documentation page. Check the browser console for details.</p>
        <pre style={{ whiteSpace: 'pre-wrap', color: '#f88' }}>{String(err && err.stack ? err.stack : err)}</pre>
      </div>
    );
  }
};

export default Documentation;

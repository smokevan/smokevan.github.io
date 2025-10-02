import React, {useState, useEffect} from "react";
import {
    Main,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
} from "./components";
import Documentation from './components/Documentation';
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

        useEffect(() => {
            const onHash = () => setHash(window.location.hash || '');
            window.addEventListener('hashchange', onHash);
            return () => window.removeEventListener('hashchange', onHash);
        }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                <FadeIn transitionDuration={700}>
                        {hash.startsWith('#/docs/') ? (
                            (() => {
                                const parts = hash.replace(/^#\/?/, '').split('/');
                                const id = parts.length > 1 ? parts[1] : parts[0];
                                return <Documentation projectId={id} />;
                            })()
                        ) : (
                            <>
                                <Main/>
                                <Expertise/>
                                <Project/>
                                <Contact/>
                            </>
                        )}
                </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
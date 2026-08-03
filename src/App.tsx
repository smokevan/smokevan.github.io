import React, {useState, useEffect} from "react";
import {
    Main,
    Expertise,
    Project,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import Documentation from './components/Documentation';
import './index.scss';

function App() {
    const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

        useEffect(() => {
            const onHash = () => setHash(window.location.hash || '');
            window.addEventListener('hashchange', onHash);
            return () => window.removeEventListener('hashchange', onHash);
        }, []);

    return (
    <div className="main-container dark-mode">
        <Navigation />
                <FadeIn transitionDuration={700}>
                        {hash.startsWith('#/docs/') ? (
                            (() => {
                                const clean = (window.location.hash || '').replace(/^#\/?/, '');
                                const parts = clean.split('/');
                                const id = parts.length > 1 ? parts[1] : parts[0];
                                return <Documentation projectId={id} />;
                            })()
                        ) : (
                            <>
                                <Main/>
                                <Project/>
                                <Expertise/>
                            </>
                        )}
                </FadeIn>
        <Footer />
    </div>
    );
}

export default App;

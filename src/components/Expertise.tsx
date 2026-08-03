import React from "react";
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
        <div className="container" id="about">
        <div className="skills-container">
                <h1>About</h1>
                <section className="about-content">
                    {/* Replace the paragraph below with your personal bio. */}
                    <p>
                        I'm (currently) a junior at Cornell - aside from making chips, I've got a lot of other hobbies. Always learning and working on new stuff! 
                    </p>
                </section>

                {/*
                  Image grid placeholder. Uncomment and add <img> tags when you
                  want to display a small gallery of images (e.g., project
                  snapshots, sketches, or fun photos). Example structure:

                  <div className="image-grid">
                    <div className="image-slot"> <img src={someImage} alt="" /> </div>
                    <div className="image-slot"> <img src={someImage} alt="" /> </div>
                    <div className="image-slot"> <img src={someImage} alt="" /> </div>
                    <div className="image-slot"> <img src={someImage} alt="" /> </div>
                  </div>

                */}
            </div>
        </div>
    );
}

export default Expertise;

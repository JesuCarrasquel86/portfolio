import React from 'react';
import { Link } from "react-router-dom";

export const HomeProjects = () => {
    return (
        <section id="bl-work-section">
            <div className="bl-box">
                <div className="col-md-12 text-center">
                    <div className="selector">
                        <h1 className="ah-headline letters type">
                            <span>I'am </span>
                            <span className="ah-words-wrapper waiting">
                                <b className="is-hidden" style={{ opacity: 1 }}>Developer</b>
                            </span>
                        </h1>
                    </div>
                    <p className="title">LOCATED IN CARACAS, VENEZUELA</p>
                    <div className="visit-btn">
                        <Link className="btn btn-default" to="/projects" role="button">MY PROJECTS</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

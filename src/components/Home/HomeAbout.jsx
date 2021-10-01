import React from 'react';
import { Link } from "react-router-dom";

export const HomeAbout = () => {
    return (
        <section className="about">
            <div className="bl-box">
                <div className="container">
                    <div className="row">
                        <div className="info-wrapper">
                            <div className="col-md-12 text-center">
                                <h3>Jesús Carrasquel</h3>
                                <Link className="btn btn-default" to="/about-me" role="button">ABOUT ME</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

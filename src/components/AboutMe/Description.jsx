import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../assets/img/jesus_1.jpg';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Description = () => {
    return (
        <div className="info" id="info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <h2 className="title">About me</h2>
                        <hr className="line" />
                        <div className="about-us-txt">
                            <p>My name is Jesús Carrasquel, I am a web developer, I seek to have work experience, and through interface design to create a more colorful world.</p>
                            <p>I consider myself a good employee, since I am responsible, honest, I am always learning and I can improve or generate new functionalities to solve problems; I will always do my best to create the customized solutions that clients require in order to promote their respective brands in the digital market, in this way the number of people interested in the products and / or services they provide can be increased.</p>
                        </div>
                        <div className="about-icon">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=100009797740953" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://github.com/JesuCarrasquel86" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a href="#" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="#" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-xs-12" style={{display: 'grid', placeItems: 'center'}}>
                        <div className="img-wrap">
                            <div className="about-us-img">
                                <img src={img} className="img-fluid" alt="about images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

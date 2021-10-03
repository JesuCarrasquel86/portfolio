import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCog , faLaptopCode, faMobile, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const Services = () => {
    return (
        <div className="service" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center">
                        <h2 className="title">Services</h2>
                        <hr className="line" />
                        <p className="sm-title">THINGS I LOVE DOING</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faLaptopCode} className='fa'/>
                            <h4>Web Development</h4>
                            <p className="main-text">Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include a CMS, API's or other integrations.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faShoppingCart} className='fa'/>
                            <h4>Ecommerce</h4>
                            <p className="main-text">CDevelop and connect online stores so that companies can start selling online as one more channel.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faMobile} className='fa'/>
                            <h4>Responsive Design</h4>
                            <p className="main-text">A responsive desing makes your website accessible to all users, regardless of their device..</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faBookmark} className='fa'/>
                            <h4>Branding</h4>
                            <p className="main-text">I design optimized web pages that represent the brand identity to boost the visibility of online companies.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faCog} className='fa'/>
                            <h4>Support</h4>
                            <p className="main-text">If your website is built with Wordpress it's crucial to keep the Wordpress version and plugins up-to-date to eliminate vulnerabilities.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faSearch} className='fa'/>
                            <h4>SEO</h4>
                            <p className="main-text">I implement SEO to promote the website in order to increase the number of visitors it receives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

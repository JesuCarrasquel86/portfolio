import { faHandPeace } from '@fortawesome/free-regular-svg-icons'
import { faBookmark, faCubes, faGamepad, faLaptop, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                            <FontAwesomeIcon icon={faPencilAlt} className='fa'/>
                            <h4>Web Development</h4>
                            <p className="main-text">Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faLaptop} className='fa'/>
                            <h4>Ecommerce</h4>
                            <p className="main-text">Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faCubes} className='fa'/>
                            <h4>Responsive Design</h4>
                            <p className="main-text">Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faGamepad} className='fa'/>
                            <h4>Branding</h4>
                            <p className="main-text">Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faBookmark} className='fa'/>
                            <h4>Support</h4>
                            <p className="main-text">Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="service-wrap">
                            <FontAwesomeIcon icon={faHandPeace} className='fa'/>
                            <h4>Marketing</h4>
                            <p className="main-text">Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

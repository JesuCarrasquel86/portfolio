import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="phone">
                            <a href="https://api.whatsapp.com/send?phone=584128059390&text=Hello%20Jes%C3%BAs!%20" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon className='icon-ms' icon={faMobileAlt} />
                                <h4>+58 412-8059390</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="email">
                            <a href="mailto:j.e.carrasquel86@gmail.com@gmail.com">
                                <FontAwesomeIcon className='icon-ms' icon={faEnvelope} />
                                <h4>J.E.CARRASQUEL86@GMAIL.COM</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="adress">
                            <FontAwesomeIcon className='icon-ms' icon={faMapMarker} />
                            <h4>CARACAS, VENEZUELA</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

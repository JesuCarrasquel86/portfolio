import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';

export const Skills = () => {
    return (
        <div className="skill" id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center">
                        <h2 className="title">Work Expertise</h2>
                        <hr className="line" />
                        <p className="sm-title">AWESOME SKILLS</p>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="single_progress_bar">
                            <p>PHP - 70%</p>
                            <div className="progress">
                                <div className="porcent_icon" style={{ left: '67.5%' }}>
                                    <FontAwesomeIcon className='icon-ms' icon={faCommentAlt} />
                                    <span>70%</span>
                                </div>
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="single_progress_bar">
                            <div className="porcent_icon" style={{ left: '82.5%' }}>
                                <FontAwesomeIcon className='icon-ms' icon={faCommentAlt} />
                                <span>85%</span>
                            </div>
                            <p>CSS - 85%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="single_progress_bar">
                            <div className="porcent_icon" style={{ left: '87.5%' }}>
                                <FontAwesomeIcon className='icon-ms' icon={faCommentAlt} />
                                <span>90%</span>
                            </div>
                            <p>HTML - 90%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="single_progress_bar">
                            <div className="porcent_icon" style={{ left: '62.5%' }}>
                                <FontAwesomeIcon className='icon-ms' icon={faCommentAlt} />
                                <span>65%</span>
                            </div>
                            <p>Javascript - 65%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="single_progress_bar">
                            <div className="porcent_icon" style={{ left: '77.5%' }}>
                                <FontAwesomeIcon className='icon-ms' icon={faCommentAlt} />
                                <span>80%</span>
                            </div>
                            <p>WordPress - 80%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="single_progress_bar">
                            <div className="porcent_icon" style={{ left: '62.5%' }}>
                                <FontAwesomeIcon className='icon-ms' icon={faCommentAlt} />
                                <span>65%</span>
                            </div>
                            <p>React - 65%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-12">
                        <div className="margin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

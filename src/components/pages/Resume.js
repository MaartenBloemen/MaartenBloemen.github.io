import React, {useMemo, useCallback} from 'react';
import {skills} from '../../constants/resumeConstants';

export default () => {
    const skillScore = useCallback((score) => {
        return (Array(10).fill(0)).map((_, i) =>
            <span key={i} className={score <= i ? 'transparent' : ''}/>
        );
    }, []);

    const skillItems = useMemo(() => {
        return skills.map((skill) =>
            <li key={skill.name}>
                <h5>{skill.name}</h5>
                <div className="rating">
                    {skillScore(skill.level)}
                </div>
            </li>
        );
    }, [skillScore]);

    return (
        <section id="resume" className="bg-white t-center">
            <div className="resume">
                <div className="content">
                    <div className="block-content mb-100">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title">
                                    <h1 className="mb-20">Resume</h1>
                                    <h5 className="uppercase">Curriculum Vitae</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100  pb-10">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline">
                                    <div className="timeline-inner">
                                        <div className="name">
                                            <span className="date">November 2018<em>Current</em></span>
                                            <h4>Brainjar - Leuven (Belgium) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                Full stack developer and AI engineer.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-inner">
                                        <div className="name switched">
                                            <span className="date">April 2018 - November 2018</span>
                                            <h4>Craftworkz – Leuven (Belgium) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                AI and data science.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-inner">
                                        <div className="name">
                                            <span className="date">March 2018 - September 2018</span>
                                            <h4>PXL-IT - Hasselt (Belgium) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                Research Train4SmartServices.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-inner">
                                        <div className="name switched">
                                            <span className="date">October 2017 - January 2018</span>
                                            <h4>Bewire – Herentals (Belgium) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                Internship computer vision, face recognition as a service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100  pb-10">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">Education</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline">
                                    <div className="timeline-inner">
                                        <div className="name">
                                            <span className="date">22 July 2018</span>
                                            <h4>PCAP - Certified Associate in Python Programming </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                <a href='https://edu.openedg.org/certificates/verify/0LCd.AAeH.q7NB' target='_blank'>Certificate</a> of proficiency in the Python programming language.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-inner ">
                                        <div className="name switched">
                                            <span className="date">February 2016</span>
                                            <h4>IBA - Kolding (Denmark) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                Certificate in game development with Unity.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-inner">
                                        <div className="name">
                                            <span className="date">2014 - 2018</span>
                                            <h4>University College PXL - Hasselt (Belgium) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                Bachelors degree application development.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-inner">
                                        <div className="name switched">
                                            <span className="date">2012 - 2014</span>
                                            <h4>KTA1 - Hasselt (Belgium) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                Secondary school applied informatics.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-inner">
                                        <div className="name">
                                            <span className="date">2009 - 2012</span>
                                            <h4>KTA3 Hotelschool - Hasselt (Belgium) </h4>
                                        </div>
                                        <div className="detail grey-text">
                                            <p>
                                                Secondary school, culinary school.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100  pb-30">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">skills</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="listing-large mt-40">
                                    <a className="uppercase emph-1 btn-1" href="#">Download my cv</a>
                                    <a className="uppercase emph-1 btn-2" href="#">Print My resume</a>
                                    <div className="listing-large-inner">
                                        <div className="listing-event">
                                            <ul className="data left clearfix">
                                                {skillItems}
                                            </ul>
                                            <ul className="data right clearfix">
                                                <li>
                                                    <h5>Assests</h5>
                                                    <p className="emph-3">
                                                        Responsible, Flexible, Funny, Diligent, Strong minded, Communication, Positive
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Languages</h5>
                                                    <ul>
                                                        <li className="emph-1">
                                                            Dutch <span className="emph-4">(Native)</span>
                                                        </li>
                                                        <li className="emph-1">
                                                            English <span className="emph-4">(Fluent)</span>
                                                        </li>
                                                        <li className="emph-1">
                                                            French <span className="emph-4">(Basic)</span>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h5>Hobbies &amp; Interests</h5>
                                                    <ul className="hb-list">
                                                        <li>
                                                            <span><i className="fa fa-mountain"/></span>
                                                            <h6>Climbing</h6>
                                                        </li>
                                                        <li>
                                                            <span><i className="fa fa-dumbbell"/></span>
                                                            <h6>Fitness</h6>
                                                        </li>
                                                        <li>
                                                            <span><i className="fa fa-gamepad"/></span>
                                                            <h6>Gaming</h6>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="page-number emph-1">- 2/4 -</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
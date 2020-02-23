import React, {useMemo} from 'react';
import {useForm} from '../../hooks/useForm';
import './Contact.scss';

export default () => {
    const {
        values,
        errors,
        success,
        handleChange,
        handleSubmit,
    } = useForm();

    const renderForm = useMemo(() => {
        if (!success) {
            return (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="input-columns clearfix">
                        <div className="column1">
                            <div className="column-inner">
                                <input
                                    className={errors.name ? 'is-invalid' : null}
                                    type="text"
                                    placeholder="Name"
                                    value={values.name}
                                    name="name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="column2">
                            <div className="column-inner">
                                <input
                                    className={errors.mail ? 'is-invalid' : null}
                                    type="text"
                                    placeholder="Email"
                                    value={values.mail}
                                    name="mail"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <input
                        className={errors.subject ? 'is-invalid' : null}
                        type="text"
                        placeholder="Subject"
                        value={values.subject}
                        name="subject"
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className={errors.message ? 'is-invalid' : null}
                        name="message"
                        placeholder="Message"
                        cols="45"
                        rows="7"
                        value={values.message}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="submit"
                        value="Submit Form"
                        className="but opc submit"
                    />
                </form>
            );
        }
        return (
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Message submitted!</h4>
                <p>
                    Thank you! Your message was submitted successfully, you will hear from me as soon as possible!
                </p>
            </div>
        );
    }, [success, values, errors]);

    return (
        <section id="contact" className="bg-white t-center">
            <div className="contact">
                <div className="content">
                    <div className="block-content mb-100">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title">
                                    <h1 className="mb-20">Contact</h1>
                                    <h5 className="uppercase">Say Hello</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100 ">
                        <div className="row">
                            <div className="col-md-12  ">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">map location</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-map">
                                    <div className="gmap_canvas">
                                        <iframe className="gmap_canvas"
                                                src="https://maps.google.com/maps?q=nieuwstraat%20102%20heusden-zolder&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                                title="Google Maps"
                                                frameBorder="0"
                                                scrolling="no"
                                                marginHeight="0"
                                                marginWidth="0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100 ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">Personal Info</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="block-info">
                                <div className="col-md-6">
                                    <div className="info">
                                        <div className="ico mb-20">
                                            <i className="fa fa-mobile-alt"/>
                                        </div>
                                        <h5 className="mb-20">Give me a call</h5>
                                        <p>
                                            Mobile : (+32) 478 81 73 00
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info">
                                        <div className="ico mb-20">
                                            <i className="fa fa-paper-plane"/>
                                        </div>
                                        <h5 className=" mb-20">Let's connect</h5>
                                        <p>
                                            LinkedIn : <a href="https://www.linkedin.com/in/maarten-bloemen/"
                                                          target='_blank'>maarten-bloemen</a>
                                            <br/> Instagram : <a href="https://www.instagram.com/maarten.bloemen3/"
                                                                 target='_blank'>maarten.bloemen3</a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100 ">
                        <div className="row">
                            <div className="col-md-12  ">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">Reach Me here</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-reach">
                                    {renderForm}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="page-number emph-1">- 4/4 -</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
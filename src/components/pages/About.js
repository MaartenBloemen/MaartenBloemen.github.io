import React from 'react';

export default () => {
    const calculateAge = () => {
        const birthDate = new Date("1994/05/10");
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <section className="bg-white t-center">
            <div className="about">
                <div className="content">
                    <div className="block-content mb-100">
                        <div className="row">
                            <div className="col-md-12  ">
                                <div className="main-title profile">
                                    <h1 className="mb-20">Maarten Bloemen</h1>
                                    <h3>AI Engineer / Software developer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100">
                        <div className="row">
                            <div className="col-md-12  ">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">About Me</h2>
                                </div>
                            </div>
                        </div>
                        <p className="lead-intro grey-text">
                            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse ! “
                        </p>
                    </div>
                    <div className="block-content mb-100 pb-30">
                        <div className="row">
                            <div className="col-md-12  ">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">Personal Info</h2>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-3  col-sm-8 col-sm-offset-3 ">
                                <div className="listing mt-40">
                                    <div className="listing-inner">
                                        <div className="listing-event">
                                            <ul className="data left">
                                                <li className="emph-1">Name</li>
                                                <li className="emph-1">Birthday</li>
                                                <li className="emph-1">Place of Birth</li>
                                                <li className="emph-1">Nationality</li>
                                                <li className="emph-1">Drivers license</li>

                                            </ul>
                                            <ul className="data right grey-text">
                                                <li>Maarten Bloemen</li>
                                                <li>05/10/1994 <span
                                                    className="emph-1">({calculateAge()} years old)</span></li>
                                                <li>Herk-De-Stad</li>
                                                <li>Belgian</li>
                                                <li>B</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content mb-100  pb-30">
                        <div className="row">
                            <div className="col-md-12  ">
                                <div className="sub-title mb-40">
                                    <h2 className="uppercase">Contact Info</h2>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-3  col-sm-8 col-sm-offset-3 ">
                                <div className="listing mt-40">
                                    <a className="uppercase emph-1 btn-1" href="#">Download my cv</a>
                                    <a className="uppercase emph-1 btn-2" href="#">Print My resume</a>
                                    <div className="listing-inner">
                                        <div className="listing-event">
                                            <ul className="data left">
                                                <li>
                                                    Maarten Bloemen
                                                    Nieuwstraat 102, 3550 Heusden-Zolder
                                                </li>
                                            </ul>
                                            <ul className="data right grey-text">
                                                <li>
                                                    <span className="emph-1"><i className='fa fa-envelope'/></span> :
                                                    bloemen.maarten@hotmail.com
                                                </li>
                                                <li>
                                                    <span className="emph-1"><i className='fa fa-link'/></span> :
                                                    www.maartenbloemen.me
                                                </li>
                                                <li>
                                                    <span className="emph-1"><i className='fa fa-phone-alt'/></span> : (+32)
                                                    478 81 73 00
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
                                <span className="page-number emph-1">- 1/4 -</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
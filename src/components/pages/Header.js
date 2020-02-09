import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import HoverImage from './hoverImage/HoverImage';

export default () => {
    const [activePage, setActivePage] = useState(1);

    const updateActivePage = useCallback((page) => {
        setActivePage(page);
    }, []);

    return (
        <div className="col-md-2 left-content pd-r0">
            <header id="header">
                <div className="main-header">
                    <div className="img-profile">
                        <HoverImage/>
                        <div className="name-profile t-center">
                            <h5 className="uppercase">Maarten Bloemen</h5>
                        </div>
                    </div>
                    <nav id="main-nav" className="main-nav clearfix t-center uppercase tabbed">
                        <ul className="clearfix">
                            <li className={activePage === 1 ? 'active' : ''}>
                                <Link to="/" className={activePage === 1 ? 'active' : ''} onClick={() => updateActivePage(1)}>
                                    <i className="fa fa-address-card"/>About me<span>Who am I</span>
                                </Link>
                            </li>
                            <li className={activePage === 2 ? 'active' : ''}>
                                <Link to="/resume" className={activePage === 2 ? 'active' : ''} onClick={() => updateActivePage(2)}>
                                    <i className="fa fa-briefcase"/>Resume<span>Curriculum vita</span>
                                </Link>
                            </li>
                            <li className={activePage === 3 ? 'active' : ''}>
                                <a href="https://blog.raccoons.be/author/maarten-bloemen" target='_blank' className={activePage === 3 ? 'active' : ''}>
                                    <i className="fa fa-blog"/>Blog<span>My thoughts</span>
                                </a>
                            </li>
                            <li className={activePage === 4 ? 'active' : ''}>
                                <Link to="/contact" className={activePage === 4 ? 'active' : ''} onClick={() => updateActivePage(4)}>
                                    <i className="fa fa-handshake"/>Contact<span>Say hello</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

import React, {useMemo} from 'react';
import HoverImage from './hoverImage/HoverImage';

export default () => {
    const activePath = useMemo(() => {
        return window.location.pathname;
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
                            <li className={activePath === '/' ? 'active' : ''}>
                                <a href="/" className={activePath === '/' ? 'active' : ''}>
                                    <i className="fa fa-address-card"/>About me<span>Who am i</span>
                                </a>
                            </li>
                            <li className={activePath === '/resume' ? 'active' : ''}>
                                <a href="/resume" className={activePath === '/resume' ? 'active' : ''}>
                                    <i className="fa fa-briefcase"/>Resume<span>Curriculum vita</span>
                                </a>
                            </li>
                            <li className={activePath === '/blog' ? 'active' : ''}>
                                <a href="https://blog.raccoons.be/author/maarten-bloemen" target='_blank' className={activePath === '/blog' ? 'active' : ''}>
                                    <i className="fa fa-blog"/>Blog<span>My thoughts</span>
                                </a>
                            </li>
                            <li className={activePath === '/contact' ? 'active' : ''}>
                                <a href="/contact" className={activePath === '/contact' ? 'active' : ''}>
                                    <i className="fa fa-handshake"/>Contact<span>Say hello</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

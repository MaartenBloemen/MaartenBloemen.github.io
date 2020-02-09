import React from 'react';

export default () => {
    return (
        <footer className="footer ">
            <div className="col-md-1 pd-l0">
                <ul className="social">
                    <li><a href="https://www.linkedin.com/in/maarten-bloemen/" target='_blank'><i className="fa fa-linkedin"/></a></li>
                    <li><a href="https://www.instagram.com/maarten.bloemen3/" target='_blank'><i className="fa fa-instagram"/></a></li>
                    <li><a href="https://github.com/MaartenBloemen" target='_blank'><i className="fa fa-github"/></a></li>
                    <li><a href="https://www.reddit.com/" target='_blank'><i className="fa fa-reddit"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© {new Date().getFullYear()} Maarten Bloemen</p>
                </div>
            </div>
        </footer>
    );
}
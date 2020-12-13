import React from 'react';

const Footer = () => {
    return (
        <footer
            className="page-footer grey darken-3"
            style={{
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px'
            }}
        >
            <div className="footer-copyright">
                <div className="left">© 2014 Copyright Text</div>
                <div className="right">
                    DISCLAIMER: Data displayed here is for testing purpose only!
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './footer.css';
import SocialLinks from './SocialLinks';
import Author from './Author';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="inner-container">
                <SocialLinks />
                <Author className="author" />
            </div>
        </div>
    )
}

export default Footer;

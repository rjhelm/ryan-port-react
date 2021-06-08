import React, { useState } from 'react';
import '../../index.css';
import { motion } from 'framer-motion';
import { animateScroll as scroll, Link } from 'react-scroll';


const Header = () => {
    
    const [navbar, setNavbar] = useState(false);
    const [navClicked, setNavClicked] = useState(false);

    
    const handleClick = () => {
        setNavClicked(!navClicked);
    };

    // allow for a sttyle change when scrolling on page
    const changeNav = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    // on scroll event listener
    window.addEventListener("scroll", changeNav);

    return (
        <div className={navbar ? "nav-wrapper active" : "nav wrapper"}>
            <motion.div id="navbar" className={navbar ? "nav-container active" : "nav-container"}
             initial={{ opacity: 0, }} 
             animate={{ opacity: 1, }}
             transition={{ opacity: 1.5, }}
             >
                <span className="logo" onClick={() => scroll.scrollToTop()}></span>
                {/* Mobile Icon */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                {/* Links */}
                <ul className={navClicked ? "anchor scrolled" : "nav-links"}>
                    <li className="link">

                    </li>
                </ul>
            </motion.div>
        </div>
    )
}

export default Header;

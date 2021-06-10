import React from 'react';
import styles from './header.module.css';

const Header = ({ list }) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h4>RyanJ_Dev</h4>
            </div>
            <nav className={styles.nav}>
                <ul>
                    {list.map((item, index) => {
                        <li key={index + 1} className={styles.naveLink}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Header;


// const Header = () => {

//     const [navbar, setNavbar] = useState(false);
//     const [navClicked, setNavClicked] = useState(false);


//     const handleClick = () => {
//         setNavClicked(!navClicked);
//     };

//     // allow for a sttyle change when scrolling on page
//     const changeNav = () => {
//         if (window.scrollY >= 50) {
//             setNavbar(true);
//         } else {
//             setNavbar(false);
//         }
//     };

//     // on scroll event listener
//     window.addEventListener("scroll", changeNav);

//     return (
//         <div className={navbar ? "nav-wrapper active" : "nav wrapper"}>
//             <motion.div id="navbar" className={navbar ? "nav-container active" : "nav-container"}
//                 initial={{ opacity: 0, }}
//                 animate={{ opacity: 1, }}
//                 transition={{ opacity: 1.5, }}
//             >
//                 <span className="logo" onClick={() => scroll.scrollToTop()}></span>
//                 {/* Mobile Icon */}
//                 <div className="menu-icon" onClick={handleClick}>
//                     <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
//                 </div>
//                 {/* Links */}
//                 <ul className={navClicked ? "anchor scrolled" : "nav-links"}>
//                     <li className="link">
//                         <Link className={navbar ? "anchor scrolled" : "anchor"}
//                             activeClass="active"
//                             to="about"
//                             hashSpy={true}
//                             spy={true}
//                             smooth={true}
//                             delay={100}
//                             offset={offset}
//                             duration={500}
//                         >
//                             About
//                         </Link>
//                         <Link className={navbar ? "anchor scrolled" : "anchor"}
//                                 activeClass="active"
//                                 to="portfolio"
//                                 hashSpy={true}
//                                 spy={true}
//                                 smooth={true}
//                                 delay={100}
//                                 offset={offset}
//                                 duration={500}
//                         >
//                             Portfolio
//                         </Link>
//                         <Link className={navbar ? "anchor scrolled" : "anchor"}
//                                 activeClass="active"
//                                 to="Resume"
//                                 hashSpy={true}
//                                 spy={true}
//                                 smooth={true}
//                                 delay={100}
//                                 offset={offset}
//                                 duration={500}
//                         >
//                             Resume
//                         </Link>
//                         <Link className={navbar ? "anchor scrolled" : "anchor"}
//                             activeClass="contact"
//                             to="home"
//                             hashSpy={true}
//                             spy={true}
//                             smooth={true}
//                             delay={100}
//                             offset={offset}
//                             duration={500}
//                         >
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             </motion.div>
//         </div>
//     )
// }

// export default Header;

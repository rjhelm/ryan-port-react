import React, { useState, useEffect } from 'react';
import '../../index.css';
import man from '';
import {motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

// Animation for Home | About page //
const contentVariants = {
    initial: {
        translateY: "100vh",
        opacity: 0
    },
    animate: {
        translateY: "0vh",
        opacity: 1,
        transition: {
            duration: 2,
            when: "beforeChildren",
        },
    },
};

const childrenVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            type: "spring",
            delay: 0.5,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: { duration: 0.2 },
    },
};

const About = () => {
    // State Declarations
    const [showHeadingOne, setShowHeadingOne] = useState(true);
    const [showHeadingTwo, setShowHeadingTwo] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (showHeadingOne) {
                setShowHeadingOne(false);
                setShowHeadingTwo(true);
            } else {
                setShowHeadingOne(true);
                setShowHeadingTwo(false);
            }
        }, 3000);
    },[showHeadingOne, showHeadingTwo]);

    return (
        <section className="aboutContainer" id="about">
            <motion.div className="content-container"
                        variants={contentVariants}
                        initial="initial"
                        animate="amimate"
            >
            <h4 className="welcome-content">RyanJ_Dev</h4>
            <br />
            <h1 className="main-conent">
                Ryan J Helm
                <motion.span 
                    drag={true}
                    dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
                    className="hand"
                    animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
                    transition={{ yoyo: Infinity, duration: 1.5 }}        
                >
                    <span role="img" aria-label="Emoji">🚀</span>
                </motion.span>
            </h1>
                {/* */}
           
            <div className="skill-animation">
                <AnimatePresence>
                    {showHeadingOne && (
                        <motion.h2
                            className="skill-content"
                            variants={childrenVariants}
                            exit="exit"
                            animate="animate"
                            initial="initial"    
                        >
                            Full Stack Web Developer
                        </motion.h2>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {showHeadingTwo && (
                        <motion.h2
                            className="skill-content"
                            variants={childrenVariants}
                            exit="exit"
                            animate="animate"
                            initial="initial"    
                        >
                            MERN Stack Focused 
                            Always learning more
                        </motion.h2>
                    )}
                </AnimatePresence>
            </div>

            <h1><span></span></h1>

            <div className="button-wrapper">
                <button className="button contact-btn" onClick={() => scroll.scrollToBottom()}>
                    Say What's Up
                    <a href=" " target="_blank" rel="noopener noreferer">
                        <button className="button">My Resume</button>
                    </a>
                </button>
            </div>
            </motion.div>

            <motion.div 
                className="svg-container"
                animate={{ translateY: [-20, 0, -20, 0] }}
                transition={{ yoyo: Infinity, duration: 5 }}
            >
                <img className="svg" src="{/* my avatar */}" alt="" />
            </motion.div>
        </section>
    )
}

export default About;

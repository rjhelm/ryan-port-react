import React from 'react';
import useWebAnimations, { rubberBand } from '@wellyshen/use-web-animations';
import styles from './about.module.css';
import appStyles from "../../app.module.css";
import Slide from 'react-reveal/Slide';
import avatar from "../../assets/images/avatar.jpg";

const About = () => {
    const { ref: refRubber, getAnimation } = useWebAnimations({ ...rubberBand });
    
    return (
        <div className={styles.aboutContainer} id="About">
            <h1 className={appStyles.heading} ref={refRubber} onClick={() => getAnimation().play()}>
                About
            </h1>
            <div className={styles.contentContainer}>
                <Slide left className=" ">
                <img
                src={avatar}
                alt="developer illustration"
            />
                </Slide>
                <Slide right>
                    <div className={styles.content}>
                        <p>
                            I am a Full Stack Web Developer with a current focus on MERN stack.
                            I continue to add as much knowledge of the stack as I can,
                            while also looking into other popular front-end and back-end tools
                            to become a web developer that can handle any situation.
                        </p>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default About;
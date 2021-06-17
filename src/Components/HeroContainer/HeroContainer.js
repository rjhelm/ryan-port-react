import React from 'react';
import useWebAnimations, { bounceInLeft } from '@wellyshen/use-web-animations';
import styles from './hero.module.css';


const HeroContainer = () => {
    
    // const { ref: refRight } = useWebAnimations({ ...bounceInRight});
    const { ref: refLeft } = useWebAnimations({...bounceInLeft});
    return (
        <div className={styles.heroContainer} id="Home">
            <div className={styles.content} ref={refLeft}>
                <h1 className={styles.bigOne}>
                    What Up
                </h1>
                <p>
                    My name is Ryan I am a Full Stack Developer. I love to create
                    aesthetic UI with user centric approach. <br />
                    Thanks for visiting my website have a look at my portfolio and if you
                    have any querry you can contact me.
                </p>
            </div>
            
        </div>
    )
}

export default HeroContainer;
import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing = () => {
    return (
        <Typewriter 
            options={{ strings: ["Full-Stack Web Developer", "Mern Stack Focus",], autoStart: true, loop: true, deleteSpeed: 50, }}/>
    );
}

export default Typing;
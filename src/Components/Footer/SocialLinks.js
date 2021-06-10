import React from 'react';
import './footer.css';

const SocialLinks = () => {
    return (
        <div className="icons-container" style={{ fontSize: "2rem" }}>
            <a target="-blank" href="https://www.linkedin.com/">
                <i className={`fab fa-linkedin`}></i>
            </a>
            <a target="-blank" href="https://github.com/rjhelm">
                <i className={`fab fa-github`}></i>
            </a>
            <a target="-blank" href="https://twitter.com/">
                <i className={`fab fa-twitter`}></i>
            </a>
            <a target="-blank" href="https://dev.to/rjhelm">
                <i className={`fab fa-dev`}></i>
            </a>
        </div>
    )
}

export default SocialLinks;
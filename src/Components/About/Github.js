import React from "react";
import GitHubCalender from 'react-github-calendar';
import { Row } from "react-bootstrap";

const Github = () => {
    const colorTheme = {
        background: 'transparent',
        text: '#ffffff',
        grade4: 'gold',
        grade3: 'rgba(255, 222, 38, 0.863)',
        grade2: "rgb(245, 218, 66)",
        grade1: "rgba(255, 233, 111, 0.884)",
        grade0: "rgba(252, 237, 129, 0.63)",
    };
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
                <strong className="gold">GitHub</strong>
            </h1>
            <GitHubCalender username="rjhelm" 
            blockSize={13}
            blockMargin={5}
            theme={colorTheme}
            fontSize={18} />
        </Row>
    );
}

export default Github;
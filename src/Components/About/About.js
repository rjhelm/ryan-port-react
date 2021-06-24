import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Particle from "../../Helpers/Particle";
// import Github from './Github';
// import Tech from './Tech';
import AboutCard from './AboutCard';
import AboutImage from '../../Assets/jid.jpg';


const About = () => {
    return (
        <Container fluid className="about-section">
            {/* <Particle /> */}
            <Container>
                <Row style={{ justifyContent: 'center', padding: '10px' }}>
                    <Col md={7} style={{ justifyContent: 'center', paddingTop: '30px', paddingBottom: '50px' }}>
                        <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
                            Ryan <strong className="gold">Helm</strong>
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col md={5} style={{ paddingTop: '100px', paddingBottom: '50px' }} className="about-img">
                        <img src={AboutImage} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    My <strong className="gold">Stack</strong>
                </h1>
                {/* <Tech /> */}
                {/* <Github /> */}
            </Container>
        </Container>
    );
};

export default About;
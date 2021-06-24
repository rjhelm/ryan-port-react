import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particle from '../../Helpers/Particle';
import Hero from './Hero';
import Typing from './Typing';

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                ryanj_dev
                            </h1>
                            <h1 className="heading-name">
                                <strong className="main-name">Ryan Helm</strong>
                            </h1>
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Typing />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Hero />
            </Container>
        </section>
    )
}

export default Home;
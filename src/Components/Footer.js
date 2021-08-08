import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" clasName="footer-copywright">
                    <h3>ryanj_dev</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Original Art by FlockoJordo</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://github.com/rjhelm" style={{ color: "white" }} >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://twitter.com/ryanj_dev" style={{ color: "white" }} >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/ryjhelm/" style={{ color: "white" }} >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.instagram.com/ryan_j_dev/" style={{ color: "white" }} >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

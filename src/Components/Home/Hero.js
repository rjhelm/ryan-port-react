import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import myImg from '../../Assets/avatar.jpg';

const Hero = () => {
    return (
        <Container fluid className="hero-section" id="about">
            <Row>
                <Col md={6} className="hero-about">
                    <h1 style={{ fontSize: "2.6em" }}>
                        I am <span className="gold"> Ryan </span>
                        <br />
                        Full-Stack Web Developer
                    </h1>
                    <p className="hero-body">
                        Coding has always been the career I saw myself in
                        <br />
                        <br />Coding has become a passion of mine that I want to continue to learn and explore.
                        <i>
                            <b className="gold"> I learned coding using the MERN Stack but have since taken oppurtunities to learn many other programming languages and tools </b>
                        </i>
                        <br />
                        <br />
                        Javascript, React, Node, NoSQL, Git, HTML, CSS.
                        <br />
                        My dream career is now one of my favorite hobbies and I have a hunger to add as much knowledge and experience as I can.
                        <br />
                        to be an elite programmer.
                        <br />
                        Now Certified as a Full-Stack Web Developer I will begin my dream career path and leave a positive, lasting impression in this field.
                    </p>
                </Col>
                <Col md={4} className="avatar">
                    <Tilt>
                        <img src={myImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="hero-social">
                    <h1>Reach Out</h1>
                    <p>
                        <span className="gold">I can be found here</span>
                    </p>
                    <ul className="hero-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/rjhelm"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/ryanj_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/ryjhelm/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/ryan_j_dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;

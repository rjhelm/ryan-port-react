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
                <Col md={8} className="hero-about">
                    <h1 style={{ fontSize: "2.6em" }}>
                        I am <span className="gold"> Ryan </span>
                        <br />
                        Full-Stack Web Developer
                    </h1>
                    <p className="hero-body">
                        I love technology and have always had a deep interest.
                        <br />
                        <br />Programming became a natural fit as I had passion for it and desire to learn.
                        <i>
                            <b className="gold"> My main focus has been MERN stack. </b>
                        </i>
                        <br />
                        <br />
                        Javascript, React, Node, NoSQL, and MySQL &nbsp;
                        <i>
                            <b className="gold"> </b>
                            {" "}
                        </i>
                        I want to continue learning everything I can pertaining to web development.
                        <br />

                        This has become a passion for me and I find myself using my free time to sharpen my existing skills
                        <br />
                        but also trying to add new tools so I can become a more complete web developer. 
                        <br />
                        I hope to continue
                        on this path and turn it into a career that I will love.
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
                                href="https://www.linkedin.com/in/rjhelm/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/ryanj_dev/"
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
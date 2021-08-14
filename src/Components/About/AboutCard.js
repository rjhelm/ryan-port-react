import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
    return (
        <Card className="about-card">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <span className="gold">Ryan H</span> <br />
                        Salt Lake City, Utah.
                        <br />
                        Certified Full-Stack Web Developer
                        <br />
                        MongoDB, MySQL, Node, Express, React
                        <br />
                        Currently exploring Python, AWS, Vue, React Native
                        <br />
                        I also enjoy:
                    </p>

                    <ul>
                        <li className="about-hobby">
                            <ImPointRight /> Learning in general
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> Music, Reading, Tech, Sports
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> Being a dad.
                        </li>

                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;

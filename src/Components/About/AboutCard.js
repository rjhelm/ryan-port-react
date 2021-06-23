import React from "react";
import Card from "reacct-bootstrap/Card";
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
                        I am a current student at the University of Utah Coding Bootcamp
                        <br />
                        I also am a student at Salt Lake Community College
                        <br />
                        My main focus is Programming and Computer Science
                        <br />
                        I also enjoy:
                    </p>

                    <ul>
                        <li className="about-hobby">
                            <ImPointRight /> Video and Card Games
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> Sports, Music, and Technology.
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> Time with Wife and 3 kids.
                        </li>

                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;

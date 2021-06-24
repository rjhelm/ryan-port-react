import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../Helpers/Particle";
import Resumecontent from "./ResumeContent";


import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {


    return (
        <Container fluid className="resume-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" target="_blank">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Job Experience</h3>
                        <Resumecontent
                            title="Backcountry Associate"
                            date="Present"
                            content={[
                                "I currently work at Backcountry where we aim to be the go to provider of outdoor suplies. I am asked to do anything they may need and work to be a reliable and helpful individual that can always be relied upon.",
                            ]}
                        />
                        <Resumecontent
                            title="Milieu Manager"
                            content={[
                                "As Milieu Manager at Copper Hills Youth Center I managed 3 Supervisors, providing training, support, oversight on decisions, etc. I was responsible for the 3 supervisors but also 24 staff that were placed by me and units to care for and provide a safe enviornment for teenagers with trauma. I have extensive experience in many areas because of this experience, I worked in an office and was in charge of files and documentation for all staff and residents, this gave me many oppurtunities to learn computer programs that are used in any office setting. I have extensive management experience, providing coaching, disciplinary action, training, and much more.",
                            ]}
                        />
                        <Resumecontent
                            title="Program Director"
                            content={[
                                "I was the director of a group home that housed adults with disabilities. I was responsible for hiring, training, and overseeing staff that cared for these adults. I completed daily, weekly, and monthly reports. Managed scheduling for staff. I oversaw the budget for the adults that lived within the group home and provided care, activities, and taught them as well as the staff.",
                            ]}
                        />

                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <Resumecontent
                            title="University of Utah Coding Bootcamp"
                            date="January - Present"
                            content={[" "]}
                        />
                        <Resumecontent
                            title="Salt Lake Community College"
                            date="2019 to Present"
                            content={[" "]}
                        />
                        <Resumecontent
                            title="Granger High School"
                            date="2007 - 2009"
                            content={[" "]}
                        />

                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" target="_blank">
                        <AiOutlineDownload />&nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;

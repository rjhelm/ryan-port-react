import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Particle from "../../Helpers/Particle";
import ResumeData from "./ResumeData";

import resume from '../../Assets/ryan-resume.docx';
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {


    return (
        <Container fluid className="resume-section">
            <Particle />
            <Container>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Job Experience</h3>
                        <ResumeData
                            title="Tier III Technical Support Agent"
                            date="Present"
                            content={[
                                "I troubleshoot system issues to resolve technical issues with vivint security systems. Responsible for checking security system and ensure they are running properly. Communicate resolutions to system issues to agents or customers.",
                            ]}
                        />
                        <ResumeData
                            title="Milieu Manager"
                            content={[
                                "As Milieu Manager at Copper Hills Youth Center I managed 3 Supervisors, providing training, support, oversight on decisions, etc. I was responsible for the 3 supervisors but also 24 staff that were placed by me and units to care for and provide a safe enviornment for teenagers with trauma. I have extensive experience in many areas because of this experience, I worked in an office and was in charge of files and documentation for all staff and residents, this gave me many oppurtunities to learn computer programs that are used in any office setting. I have extensive management experience, providing coaching, disciplinary action, training, and much more.",
                            ]}
                        />
                        <ResumeData
                            title="Program Director"
                            content={[
                                "I was the director of a group home that housed adults with disabilities. I was responsible for hiring, training, and overseeing staff that cared for these adults. I completed daily, weekly, and monthly reports. Managed scheduling for staff. I oversaw the budget for the adults that lived within the group home and provided care, activities, and taught them as well as the staff.",
                            ]}
                        />

                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <ResumeData
                            title="University of Utah Coding Bootcamp"
                            date="January - July 2021"
                            content={[" "]}
                        />
                        <ResumeData
                            title="Salt Lake Community College"
                            date="2019 to Present"
                            content={[" "]}
                        />
                        <ResumeData
                            title="Granger High School"
                            date="2007 - 2009"
                            content={[" "]}
                        />

                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={resume} target="_blank">
                        <AiOutlineDownload />&nbsp;Resume
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;

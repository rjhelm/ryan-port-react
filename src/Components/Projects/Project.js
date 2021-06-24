import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particle from '../../Helpers/Particle';
import ProjectCard from './ProjectCard';

// import project images to be displayed //
import tech from "../../Assets/Projects/tech-blog.png";
import spotify from "../../Assets/Projects/spotify.PNG";
import weather from "../../Assets/Projects/weather.png";
import snek from "../../Assets/Projects/snek.png";
import notes from "../../Assets/Projects/note-taker.png";

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="gold">Work </strong>
                </h1>

                <p style={{ color: "white" }}>
                    Here are just a few of my projects:
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={snek}
                            title="Snek"
                            description="Snake Game that functions like the original game with a few add-ons. Functioning gameboard and score keeping in realtime with modal to save scores."
                            link="https://github.com/rjhelm/snek-game"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tech}
                            title="Tech Blog"
                            description="A blogging application that is deployed and functional. The user is able to create posts, comment, and interact with posts."
                            link="https://fathomless-chamber-99363.herokuapp.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            title="Weather Dashboard"
                            description="Weather Dashboard App that allows user to search for weather anywhere in the world and store the searches for easy use again in the future. "
                            link="https://rjhelm.github.io/weather-dashboard/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={notes}
                            title="Note Taker"
                            description="Note taking app that gives the user an easily accessible and clean layout to take notes and store them for use later."
                            link="https://notes-by-ryanj.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={spotify}
                            title="Spotify Clone"
                            description="A simple clone of spotify that will authorize a user and open up to account page. Created to show react front-end capability."
                            link="https://github.com/rjhelm/spotify-clone"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
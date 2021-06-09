import React, { useState } from 'react';
import { Button, Card} from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion';
import projects from './MyProjects';

const ProjectList = () => {

    const project = useState({projects});

    return (
        <Card data-aos="flip-left">
            <div className="card-thumbnail">
            <AnimatePresence>
                {project.map((image, i) => (
                    <motion.div className="overlay">
                        <img 
                        src={projects.image}
                        className="img-thumbnail mx-2"
                        alt={projects.title}
                        onLoad={() => project(image, i)}
                        key={projects.title}
                    />
                    </motion.div>
                ))}
            </AnimatePresence>
            </div>

            <Card.Body>
                <Card.Title className="title">{projects.title}</Card.Title>
                <Card.Text>{projects.desc}</Card.Text>
                <div className="btn-grp">
                    <Button href={projects.github} target="_blank">
                        
                    </Button>
                    <Button href={projects.link} target="_blank" variant="secondary">
                        
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectList;

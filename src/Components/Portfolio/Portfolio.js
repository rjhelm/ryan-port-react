import React, { useState, useEffect } from 'react';
import Project from './Project';

const Portfolio = ({ projects }) => {
    const [count, setCount] = useState(8)
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(projects.slice(0, count))
    }, [count, projects])

    return (
        <section>
            {/* Projects */}
            <div className="project-cards">
                {items && items.map((project, index) => <Project project={project} key={index} />)}
            </div>
        </section>
    )
}

export default Portfolio

import React, { useState } from 'react';

function Project() {
    const [project] = useState([
        {
            name: "",
            description: "",
            github: "",
            deployed: ""
        },
        {
            name: "",
            description: "",
            github: "",
            deployed: ""
        },
        {
            name: "",
            description: "",
            github: "",
            deployed: ""
        },
        {
            name: "",
            description: "",
            github: "",
            deployed: ""
        },
        {
            name: "",
            description: "",
            github: "",
            deployed: ""
        },
        {
            name: "",
            description: "",
            github: "",
            deployed: ""
        }
    ]);


    return (
        
        <div className="card">
        {/* map projects || load with transition */}
            <h4 className="card-header">

            </h4>
            <img alt="" />            
        </div>
        
    )
}

export default Project

import React from 'react';
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects';

export const WorksGrid = () => {

    return (
        <div className="bl-content">
            <div className="col-md-12 text-center">
                <h2 className="work-title">My Works</h2>
                <p>SOME OF MY BEST PROJECTS</p>
            </div>
            <ul id="bl-work-items" className="text-center">
                {
                    projects.map(project => (
                        <li key={project.id} data-panel="panel-1">
                            <Link exact to={`/projects/${project.id}`}>
                                <img src={project.img} alt={project.name} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

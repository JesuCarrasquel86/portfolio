import React, { useMemo} from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { getProject } from '../../helpers/getProjects';

export const WorksItem = () => {

    const { id } = useParams();

    const project = useMemo(() => getProject( id ), [ id ]);

    if(!project){
        return <Redirect to='/projects'/>
    }

    return (
        <div data-panel="panel-item" className="bl-show-work panel-item">
            <div className='content-bx'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={project.img} className="img-fluid" alt={project.name} />
                        </div>
                        <div className="col-md-6">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-btn">
                                <a className="btn btn-default" href={project.url} role="button" target='_blank'>VISIT PROJECT</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                 <Link to={`/projects/${parseInt(project.id) + 1}`}>
                 <span className="bl-next-work">&gt; Next Project</span>
                 </Link>
                 <Link to='/projects'>
                  <span className='bl-icon'></span>
                 </Link>
               </nav>
            </div>
        </div>
    )
}

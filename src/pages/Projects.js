import React from 'react'
import { Link } from "react-router-dom";
import { WorksGrid } from '../components/Projects/WorksGrid';

import close from '../assets/img/close.png';

export const Projects = () => {
    return (
        <>
            <WorksGrid />
            <Link to='/'>
                <img src={close} className="bl-icon bl-icon-close" alt="close" />
            </Link>
        </>
    )
}

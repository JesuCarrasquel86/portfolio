import { projects } from '../data/projects';

export const getProject = ( id ) => {

    return projects.find( project => project.id === id );

}
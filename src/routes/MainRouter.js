import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { WorksItem } from '../components/Projects/WorksItem';
import { AboutMe } from '../pages/AboutMe';
import { HomeScreen } from '../pages/HomeScreen';
import { Projects } from '../pages/Projects';

export const MainRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/projects/:id" component={ WorksItem } />
                    <Route path="/about-me" component={AboutMe}/>
                    <Route path="/projects" component={Projects}/>
                    <Route exact path="/" component={HomeScreen}/>
                </Switch>
            </div>
        </Router>
    )
}

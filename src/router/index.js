import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Index from './../views/Index'
import About from './../views/About'
import Topics from './../views/Topics'

const Basic = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/About" component={About} />
            <Route path="/Topics" component={Topics} />
        </Switch>
    </Router>
)

export default Basic
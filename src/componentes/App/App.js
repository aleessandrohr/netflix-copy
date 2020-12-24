import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Browse from '../Browse/Browse';
import './Normalize.css';

const App = () => {
    return(
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Welcome/>
                    </Route>
                    <Route path="/browse">
                        <Browse />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './Welcome';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Welcome />
                        </Route>
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

export default App;
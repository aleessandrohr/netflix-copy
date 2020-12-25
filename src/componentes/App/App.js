import React, { useState, memo } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import Browse from '../Browse/Browse';
import './Normalize.css';

const App = () => {

    const [Logged, setLogged] = useState(localStorage.getItem("Logged"));

    if (Logged == null) {
        localStorage.setItem("Logged", "false")
    }

    const LoggedTrue = (user) => {
        localStorage.setItem("Logged", "true")
        localStorage.setItem("Username", user)
        setLogged("true")
    }
 
    return(
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        {Logged === "true" ? <Redirect to="/browse" /> : <Welcome />}
                    </Route>
                    <Route path="/login">
                        {Logged === "true" ? <Redirect to="/browse" /> : <Login LoggedTrue={LoggedTrue} /> }
                    </Route>
                    <Route path="/browse">
                        {Logged ===  "true" ? <Browse /> : <Redirect to="/" />}
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default memo(App);
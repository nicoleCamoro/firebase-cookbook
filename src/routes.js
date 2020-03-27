import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Routes;

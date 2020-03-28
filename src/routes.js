import React, { Component } from "react";
import { createBrowserHistory } from "history";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Login from "./component/Login";
import Recipes from "./component/Recipes";

class Routes extends Component {
  render() {
    return (
      <Router history={createBrowserHistory}>
        <Navbar expand="md" className="app-nav">
          <Navbar.Brand href="/recipes">Firebase cookbook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/recipes">Home</Link>
              <Link to="/new-recipe">New Recipes</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/recipes/:recipe_id">
            <Recipes />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Project from "./components/project";
import About from "./components/about";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App p-3">
        <NavBar />
        <Switch>
          <Route path="/projects/:project" component={Project} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Redirect from="/" exact to="/projects" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;

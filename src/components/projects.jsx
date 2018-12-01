import React, { Component } from "react";
import { getProjects } from "../services/projectService";
import ProjectsDisplay from "./projectsDisplay";

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    const projects = getProjects();
    this.setState({ projects });
  }

  render() {
    return (
      <React.Fragment>
        <ProjectsDisplay projects={this.state.projects} />
      </React.Fragment>
    );
  }
}

export default Projects;

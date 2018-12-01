import React, { Component } from "react";
import { getProject, getProjects } from "../services/projectService";
import ProjectDisplay from "./projectDisplay";
import ProjectsDisplay from "./projectsDisplay";

class Project extends Component {
  state = {
    project: {},
    projects: []
  };

  componentDidMount() {
    const project = getProject(this.props.match.params.project);
    this.setState({ project });
    const projects = getProjects();
    this.setState({ projects });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.project !== prevProps.match.params.project) {
      const project = getProject(this.props.match.params.project);
      window.scrollTo(0, 0);
      this.setState({ project });
    }
  }

  render() {
    return (
      <React.Fragment>
        <ProjectDisplay project={this.state.project} />
        <ProjectsDisplay projects={this.state.projects} />
      </React.Fragment>
    );
  }
}

export default Project;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectsDisplay extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="row mw-100 m-auto">
        {projects.map(p => (
          <Link
            key={p.folder}
            className="p-1 col-6 col-sm-4"
            to={`/projects/${p.url}`}
          >
            <img
              src={`/images/${p.folder}/${p.thumbnail}`}
              alt={p.thumbnail}
              className="img-fluid"
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default ProjectsDisplay;

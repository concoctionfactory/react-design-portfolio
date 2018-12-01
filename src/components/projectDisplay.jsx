import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPrevNextProject } from "../services/projectService";

class ProjectDisplay extends Component {
  prevNextElement() {
    const prevProject = getPrevNextProject(this.props.project.url, false);
    const nextProject = getPrevNextProject(this.props.project.url);

    return (
      <div className="d-flex justify-content-end align-items-center">
        <Link className="text-muted" to={`/projects/${prevProject}`}>
          prev
        </Link>
        <span className="m-2">|</span>
        <Link className="text-muted" to={`/projects/${nextProject}`}>
          next
        </Link>
      </div>
    );
  }

  render() {
    const { project } = this.props;
    const { images, tasks } = project;
    return (
      <div style={{ marginBottom: 45 }}>
        <h2 className=" text-center text-uppercase font-weight-light my-5">
          {project.title}
        </h2>
        {this.prevNextElement()}

        <div className="d-flex flex-column ">
          {images &&
            images.map(image => {
              console.log(image);
              if (
                image.includes("jpg") ||
                image.includes("png") ||
                image.includes("gif")
              ) {
                return (
                  <img
                    className="img-fluid my-3 mx-auto"
                    key={image}
                    src={`/images/${project.folder}/${image}`}
                    alt={image}
                  />
                );
              } else {
                return (
                  <video
                    className="img-fluid my-3 mx-auto"
                    key={image}
                    src={`/images/${project.folder}/${image}`}
                    controls
                  />
                );
              }
            })}
        </div>
        {this.prevNextElement()}

        <h3 className=" text-center font-weight-light">
          {project.description}
        </h3>

        <div className="d-flex justify-content-center">
          {tasks &&
            tasks.map(task => (
              <Link
                key={task}
                className="m-2 text-muted"
                to={`/category/${task}`}
              >
                {task}
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default ProjectDisplay;

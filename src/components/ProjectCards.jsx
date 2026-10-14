import React from "react";

export default function ProjectCard({ project, isNew }) {
  return (
    <li id={project.slug} className={isNew ? "project project--new" : "project"}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-thumb"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={project.img}
          alt=""
          width="200"
          height="109"
          loading={isNew ? "eager" : "lazy"}
        />
      </a>

      <div className="project-text">
        <h3 className="project-title">
          {project.title}
          {isNew && <span className="new-tag">NEW!</span>}
        </h3>
        <p>{project.description}</p>
        <p className="project-stack">
          <b>Built with:</b> {project.stack.join(", ")}
        </p>
        <p className="project-links">
          [{" "}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Live site
          </a>{" "}
          ] [{" "}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Source code
          </a>{" "}
          ]
        </p>
      </div>
    </li>
  );
}

import React from "react";
import { projects } from "./../data/projects.js";
import ProjectCard from "./ProjectCards.jsx";

function Projects() {
  return (
    <section id="projects" className="content">
      <h2 className="content-heading">My Projects</h2>
      <p className="content-intro">
        These are small web apps I built while learning HTML, CSS, JavaScript
        and React. Click a picture to open the live site, or read the source
        code on GitHub.
      </p>

      <ul className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} isNew={index < 2} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, isNew }) {
  const detailHref = `/projects/${project.slug}`;

  return (
    <li id={project.slug} className={isNew ? "project project--new" : "project"}>
      <Link
        href={detailHref}
        className="project-thumb"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.img}
          alt=""
          sizes="(max-width: 720px) 320px, 200px"
          priority={isNew}
        />
      </Link>

      <div className="project-text">
        <h3 className="project-title">
          <Link href={detailHref}>{project.title}</Link>
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

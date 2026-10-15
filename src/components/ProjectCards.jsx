import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, isNew }) {
  const detailHref = `/projects/${project.slug}`;
  const image = project.images[0];

  return (
    <li id={project.slug} className={isNew ? "project project--new" : "project"}>
      <Link
        href={detailHref}
        className="project-thumb"
        tabIndex={-1}
        aria-hidden="true"
      >
        {image && (
          <Image
            src={image.url}
            alt=""
            width={image.width}
            height={image.height}
            sizes="(max-width: 720px) 320px, 200px"
            priority={isNew}
          />
        )}
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
          {project.liveUrl && (
            <>
              [{" "}
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live site
              </a>{" "}
              ]{" "}
            </>
          )}
          {project.githubUrl && (
            <>
              [{" "}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>{" "}
              ]
            </>
          )}
        </p>
      </div>
    </li>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail({ project, previous, next }) {
  return (
    <article className="content detail">
      <p className="breadcrumb">
        <Link href="/">Home</Link> &gt; <Link href="/#projects">Projects</Link>{" "}
        &gt; {project.title}
      </p>

      <h2 className="content-heading">{project.title}</h2>
      <p className="content-intro">{project.description}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-thumb detail-shot"
      >
        <Image
          src={project.img}
          alt={`Screenshot of ${project.title}`}
          sizes="(max-width: 720px) 100vw, 640px"
          priority
        />
      </a>

      <div className="detail-columns">
        <div className="detail-body">
          <h3 className="detail-heading">About this project</h3>
          <p>{project.about}</p>

          <h3 className="detail-heading">Features</h3>
          <ul className="detail-features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <aside className="side-box detail-info">
          <h3 className="side-heading">Project info</h3>
          <dl>
            <dt>Built with</dt>
            <dd>{project.stack.join(", ")}</dd>
            <dt>Live site</dt>
            <dd>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Open the live site
              </a>
            </dd>
            <dt>Source code</dt>
            <dd>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </dd>
          </dl>
        </aside>
      </div>

      <nav className="detail-pager" aria-label="Other projects">
        {previous ? (
          <Link className="bevel-button" href={`/projects/${previous.slug}`}>
            « {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link className="bevel-button" href={`/projects/${next.slug}`}>
            {next.title} »
          </Link>
        )}
      </nav>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectDetail({ project, previous, next }) {
  const image = project.images[0];
  const screenshot = image && (
    <Image
      src={image.url}
      alt={`Screenshot of ${project.title}`}
      width={image.width}
      height={image.height}
      sizes="(max-width: 720px) 100vw, 640px"
      priority
    />
  );

  return (
    <article className="content detail">
      <p className="breadcrumb">
        <Link href="/">Home</Link> &gt; <Link href="/#projects">Projects</Link>{" "}
        &gt; {project.title}
      </p>

      <h2 className="content-heading">{project.title}</h2>
      <p className="content-intro">{project.description}</p>

      {screenshot &&
        (project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-thumb detail-shot"
          >
            {screenshot}
          </a>
        ) : (
          <div className="project-thumb detail-shot">{screenshot}</div>
        ))}

      <div className="detail-columns">
        <div className="detail-body">
          <h3 className="detail-heading">About this project</h3>
          <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.fullDescription || project.description}
            </ReactMarkdown>
          </div>
        </div>

        <aside className="side-box detail-info">
          <h3 className="side-heading">Project info</h3>
          <dl>
            <dt>Built with</dt>
            <dd>{project.stack.join(", ")}</dd>
            {project.liveUrl && (
              <>
                <dt>Live site</dt>
                <dd>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open the live site
                  </a>
                </dd>
              </>
            )}
            {project.githubUrl && (
              <>
                <dt>Source code</dt>
                <dd>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </dd>
              </>
            )}
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

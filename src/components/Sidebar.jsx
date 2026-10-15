import Link from "next/link";

const Sidebar = ({ projects }) => {
  const digits = String(projects.length).padStart(6, "0").split("");

  return (
    <aside className="sidebar">
      <nav className="side-box" aria-labelledby="nav-heading">
        <h2 id="nav-heading" className="side-heading">
          Navigation
        </h2>
        <ul className="side-buttons">
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <a
              href="https://github.com/rafiframadhana"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://rafifr.my.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>

      <nav className="side-box" aria-labelledby="index-heading">
        <h2 id="index-heading" className="side-heading">
          All projects
        </h2>
        <ul className="side-index">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="side-box">
        <h2 className="side-heading">Projects online</h2>
        <p className="counter" aria-label={`${projects.length} projects`}>
          {digits.map((digit, index) => (
            <span key={index} aria-hidden="true">
              {digit}
            </span>
          ))}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

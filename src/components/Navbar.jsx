import Link from "next/link";

const Navbar = ({ projects }) => {
  const newTitles = projects
    .slice(0, 2)
    .map((project) => project.title)
    .join(" and ");

  return (
    <header className="banner">
      <div className="banner-title">
        <h1>
          <Link href="/">Old Projects Collection</Link>
        </h1>
        <p>The homepage of Rafif Ramadhana</p>
      </div>

      <div className="marquee" aria-label="Site news">
        <p className="marquee-track">
          Welcome to my old projects collection! There are {projects.length}{" "}
          projects online. New this update: {newTitles}.
          Click any picture to see the project details.
        </p>
      </div>
    </header>
  );
};

export default Navbar;

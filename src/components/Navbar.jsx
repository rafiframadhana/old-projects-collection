import Link from "next/link";

const Navbar = ({ projectCount }) => {
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
          Welcome to my old projects collection! There are {projectCount}{" "}
          projects online. New this update: Amazon Clone and Clothing Store.
          Click any picture to see the project details.
        </p>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { projects } from "./../data/projects.js";

const Navbar = () => {
  return (
    <header className="banner">
      <div className="banner-title">
        <h1>
          <a href="/">Old Projects Collection</a>
        </h1>
        <p>The homepage of Rafif Ramadhana</p>
      </div>

      <div className="marquee" aria-label="Site news">
        <p className="marquee-track">
          Welcome to my old projects collection! There are {projects.length}{" "}
          projects online. New this update: Amazon Clone and Clothing Store.
          Click any picture to open the live site.
        </p>
      </div>
    </header>
  );
};

export default Navbar;

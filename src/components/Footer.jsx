import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <p>
        <a href="#top">Back to top</a> |{" "}
        <a
          href="https://rafifr.my.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my newer work
        </a>
      </p>
      <p className="footer-small">
        © 2003 Rafif Ramadhana. Best viewed at 800 × 600
        or higher.
      </p>
    </footer>
  );
};

export default Footer;

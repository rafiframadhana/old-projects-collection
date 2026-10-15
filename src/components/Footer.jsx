import React from "react";

const badges = [
  { label: "React", sub: "made with", href: "https://react.dev" },
  { label: "Vite", sub: "built with", href: "https://vite.dev" },
  {
    label: "GitHub",
    sub: "code on",
    href: "https://github.com/rafiframadhana",
  },
];

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

      <ul className="badges">
        {badges.map((badge) => (
          <li key={badge.label}>
            <a
              className="badge"
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>{badge.sub}</small>
              {badge.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="footer-small">
        © 2003 Rafif Ramadhana. Best viewed with any browser.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import { projects } from "./../data/projects.js";

const menus = ["File", "Edit", "View", "Favorites", "Tools", "Help"];

export function BrowserTop() {
  return (
    <div className="chrome-top">
      <div className="titlebar">
        <span className="titlebar-icon" aria-hidden="true" />
        <span className="titlebar-text">
          Old Projects Collection - Microsoft Internet Explorer
        </span>
        <span className="titlebar-buttons" aria-hidden="true">
          <span>_</span>
          <span>□</span>
          <span>×</span>
        </span>
      </div>

      <div className="menubar" aria-hidden="true">
        {menus.map((menu) => (
          <span key={menu}>
            <u>{menu[0]}</u>
            {menu.slice(1)}
          </span>
        ))}
      </div>

      <div className="addressbar">
        <span className="addressbar-label">Address</span>
        <span className="addressbar-field">{window.location.href}</span>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="statusbar">
      <span className="statusbar-cell statusbar-main">
        Done. {projects.length} projects loaded.
      </span>
      <span className="statusbar-cell statusbar-zone">Internet</span>
    </div>
  );
}

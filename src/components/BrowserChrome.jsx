import AddressBar from "./AddressBar.jsx";

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

      <AddressBar />
    </div>
  );
}

export function StatusBar({ projectCount }) {
  return (
    <div className="statusbar">
      <span className="statusbar-cell statusbar-main">
        Done. {projectCount} projects loaded.
      </span>
      <span className="statusbar-cell statusbar-zone">Internet</span>
    </div>
  );
}

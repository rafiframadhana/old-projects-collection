import "./globals.css";
import { getProjects } from "@/lib/repositories/projects.js";
import { BrowserTop, StatusBar } from "@/components/BrowserChrome.jsx";
import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import Footer from "@/components/Footer.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";

export const metadata = {
  title: {
    default: "Old Projects Collection | Rafif Ramadhana",
    template: "%s | Old Projects Collection",
  },
  description:
    "Old projects collection: small web apps by Rafif Ramadhana, built while learning HTML, CSS, JavaScript and React.",
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({ children }) {
  const projects = await getProjects();

  return (
    <html lang="en">
      <body>
        <div className="window" id="top">
          <BrowserTop />
          <div className="page">
            <Navbar projects={projects} />
            <div className="layout">
              <Sidebar projects={projects} />
              <main className="main-content">{children}</main>
            </div>
            <Footer />
          </div>
          <StatusBar projectCount={projects.length} />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

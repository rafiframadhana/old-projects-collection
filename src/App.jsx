import "./App.css";
import { BrowserTop, StatusBar } from "./components/BrowserChrome.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="window" id="top">
      <BrowserTop />
      <div className="page">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <main className="main-content">
            <Projects />
          </main>
        </div>
        <Footer />
      </div>
      <StatusBar />
      <ScrollToTop />
    </div>
  );
}

export default App;

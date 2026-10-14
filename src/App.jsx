import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="page" id="top">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Projects />
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

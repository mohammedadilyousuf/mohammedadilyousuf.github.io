import { useState, useEffect } from 'react';
import './styles/App.css'
import NavBar from "./NavBar.jsx";
import Info from "./Info.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Footer from "./Footer.jsx";
import VisitorStats from "./VisitorStats.jsx";
import VisitorTracker from "./utils/visitorTracker.js";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [showStats, setShowStats] = useState(false);
  const [visitorStats, setVisitorStats] = useState(null);
  const [visitorTracker] = useState(() => new VisitorTracker());

  const handlePageChange = (page) => {
    const element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentPage(page);
  };

  const toggleStats = () => {
    if (!showStats) {
      const stats = visitorTracker.getStats();
      setVisitorStats(stats);
    }
    setShowStats(!showStats);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentPage(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <NavBar onPageChange={handlePageChange} currentPage={currentPage} />
        <div id="home">
          <Info onTripleClick={toggleStats} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <Footer />
        {showStats && visitorStats && (
          <VisitorStats stats={visitorStats} onClose={() => setShowStats(false)} />
        )}
    </>
  )
}

export default App

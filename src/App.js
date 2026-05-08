// Portfolio App - Main Application Component
import './App.css';
import './index.css';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Profile from './PortfolioContainer/Home/Profile';
import About from './PortfolioContainer/About/About';
import Experience from './PortfolioContainer/Experience/Experience';
import Education from './PortfolioContainer/Education/Education';
import Skills from './PortfolioContainer/Skills/Skills';
import Projects from './PortfolioContainer/Projects/Projects';
import Contact from './PortfolioContainer/Contact/Contact';
import Footer from './PortfolioContainer/Footer/Footer';
import GlobalParticles from './components/GlobalParticles';
import AnimatedGradientMesh from './components/AnimatedGradientMesh';
import ElegantWaves from './components/ElegantWaves';
import FloatingShapes from './components/FloatingShapes';
import ScrollToTop from './components/ScrollToTop';
import StatsStrip from './components/StatsStrip';

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflowX: 'hidden' }}>
      <AnimatedGradientMesh />
      <ElegantWaves />
      <GlobalParticles />
      <FloatingShapes />
      <Navbar />
      <Profile />
      <About />
      <StatsStrip />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

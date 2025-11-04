// Portfolio App - Main Application Component
import './App.css';
import './index.css';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Profile from './PortfolioContainer/Home/Profile';
import About from './PortfolioContainer/About/About';
import Experience from './PortfolioContainer/Experience/Experience';
import Skills from './PortfolioContainer/Skills/Skills';
import Projects from './PortfolioContainer/Projects/Projects';
import Contact from './PortfolioContainer/Contact/Contact';
import GlobalParticles from './components/GlobalParticles';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalParticles />
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

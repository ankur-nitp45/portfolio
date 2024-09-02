import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/Techstack/Techstack';
import WorkExp from './pages/WorkExp/WorkExp';
import ScrollToTop from 'react-scroll-to-top';
import { useTheme } from './context/ThemeContext';
import Tada from 'react-reveal/Tada';
import MobileNav from './components/MobileNav/MobileNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container project">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h5 className="text-center">
              {' '}
              Made with 💖 Ankur N. Singh &copy; 2024{' '}
            </h5>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        color="#fff"
        style={{ backgroundColor: '#138781', borderRadius: '80px' }}
      />
    </>
  );
}

export default App;

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Ankur_Resume (2).pdf';
import Fade from 'react-reveal/Fade';
import './Home.css';

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (
            <BsFillMoonStarsFill size={27} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="home-content">
          <Fade right>
            <h2>Hello, I'm </h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    '< Ankur Narayan Singh />',
                    '< Software Developer />',
                    '< Competitive Programmer />',
                    '< Frontend Web Developer />',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="http://api.whatsapp.com/send?phone=7488727701"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-resume"
                href={Resume}
                download="my_resume.pdf"
              >
                Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default Home;

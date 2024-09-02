import React from 'react';
import Fade from 'react-reveal/Fade';
import myImage from '../../assets/images/travelling_atlas_pic.jpg';
import mySchool_pic from '../../assets/images/school.jpeg';
import myWeather from '../../assets/images/weather.jpg';
import myPortfolio from '../../assets/images/portfolio.jpg';
import mycalcu from '../../assets/images/calculator.jpg';
import employee from '../../assets/images/employee_mang.png';
import './Projects.css';
const Projects = () => {
  return (
    <>
      <div className="project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          My Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Welcome to my technology stack showcase! Here, you'll find a
          variety of tools and technologies that I use to create innovative
          solutions and smooth digital experiences.
        </p>

        <div className="row" id="ads">
          <Fade right>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src={myImage} alt="travelling atlas" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>Travelling Atlas</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ankur-nitp45/TravelApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src={employee} alt="school_managment" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Java</span>
                  <span className="card-detail-badge">AWT</span>
                  <span className="card-detail-badge">Swing</span>
                  <span className="card-detail-badge">MySQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>ManageMate</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ankur-nitp45/ManageMate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src={mySchool_pic} alt="school_managment" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Java</span>
                  <span className="card-detail-badge">Collection</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>School Bridge</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ankur-nitp45/school-bridge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src={myPortfolio} alt="portfolio" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">SendGrid</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>My Portfolio</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src={myWeather} alt="weather" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>Weather Watcher</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://weather-app-five-xi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img src={mycalcu} alt="calculator" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>Calculator</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;

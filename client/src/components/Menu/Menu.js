import React from 'react';
import './Menu.css';
import myphoto from '../../assets/images/myy_photo.jpg';
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBusinessContact,
} from 'react-icons/fc';
import { BsStack } from 'react-icons/bs';
import { SiPolymerproject } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={myphoto} alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <IoIosSchool size={21} color="#C7C8CC" />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <BsStack color="#7E8EF1" />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <SiPolymerproject color="#379777" />
                    Projects
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="workexp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experince
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoIosSchool size={21} color="#C7C8CC" title="Education" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BsStack color="#7E8EF1" title="Tech Stack" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <SiPolymerproject color="#379777" title="Projects" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode title="Work Experince" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;

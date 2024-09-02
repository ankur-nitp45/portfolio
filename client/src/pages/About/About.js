import React from 'react';
import myPhoto from '../../assets/images/myy_photo.jpg';
import Jump from 'react-reveal/Jump';
import './About.css';

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={myPhoto} alt="profile-pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello, I'm Ankur Narayan Singh, a passionate tech enthusiast and
                web developer. With a strong foundation in web technologies and
                Data Structures and Algorithms, my journey through pixels and
                lines of code has honed my skills in crafting seamless digital
                experiences. Beyond academics, I dive into the world of robotics
                and the strategic realm of chess, always exploring new
                technologies and innovative strategies. My curiosity drives me
                to continuously learn, innovate, and push the boundaries of
                what's possible in the digital world. I am committed to
                leveraging technology to solve real-world problems and create
                impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import myphoto from '../../assets/images/contact_img.jpg';
import './Contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error('Please provide all details');
      }
      const res = await axios.post('/api/v1/portfolio/sentEmail', {
        name,
        email,
        msg,
      });

      // validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName('');
        setEmail('');
        setMsg('');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <Zoom>
                    <img src={myphoto} alt="contact" className="image" />
                  </Zoom>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Fade bottom>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h5>
                        CONTACT WITH :
                        <a
                          href="https://www.linkedin.com/in/ankur-narayan-singh-927596220/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-4"
                        >
                          <FaLinkedin color="blue" size={25} />
                        </a>
                        <a
                          href="https://github.com/ankur-nitp45"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-4"
                        >
                          <FaGithub color="black" size={25} />
                        </a>
                        <a
                          href="https://www.instagram.com/awesome_ankur27/?next=%2F"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-4"
                        >
                          <FaInstagram color="#FF7EE2" size={25} />
                        </a>
                      </h5>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write Your Message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

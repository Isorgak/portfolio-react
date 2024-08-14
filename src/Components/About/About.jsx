import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the ?eld. Tyrooghoui my career. I have
              had the privilege of colloboro?ng w?h presiigious organizations,
              contributing '0 their success and growth.
            </p>
            <p>
              My passion for frontend development is not only re?ected in my
              extensive experience but also in he enthusiasm and dedication I
              bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }}></hr>
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '70%' }}></hr>
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '40%' }}></hr>
            </div>

            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: '90%' }}></hr>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

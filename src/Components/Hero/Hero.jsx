import React from 'react';
import './hero.css';
import profile_img from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="hero-image" />
      <h1>
        <span>I'm Isak Tsegai,</span> Java Developer, Frontend Developer.
      </h1>
      <p>
        I am a Developer from Hamburg, Germany with almost years of experience
        in multiple companies like Wirlesslogic Mdex and DAKOSY
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {' '}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {' '}
            Connect with me{' '}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;

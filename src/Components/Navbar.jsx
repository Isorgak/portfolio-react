/* import React, { useState, useRef } from 'react'; */
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      menuRef.current.style.right = '-350px';
    } else {
      menuRef.current.style.right = '0';
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={toggleMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />

        {/*         <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt="" /> : <></>}
        </li> */}

        {['home', 'about', 'services', 'work', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink className="anchor-link" offset={50} href={`#${item}`}>
              <p onClick={() => setMenu(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
            {menu === item ? <img src={underline} alt="underline" /> : null}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Contact With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

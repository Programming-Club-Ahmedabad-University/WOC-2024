<<<<<<< HEAD
import { React, useEffect, useState } from "react";
=======
import {React ,useEffect, useState} from 'react';
>>>>>>> 67d955ca81080bb6a770bf6ecd89abc913c8c6f9
import "../components/Navbar.css";
// import PClub_logo from "../assets/PClub.png";
import PClub_logo from "/public/PClub.png";
import Bars from "../assets/menu.png";
import { Link } from 'react-router';

const Navbar = () => {
  // Managing open/close of menu

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // To close menu on window resize if width > 1024px

  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1024 && menuOpen == true) {
      setMenuOpen(false);
    }
  });

  // To close the menu, after clicking a link

  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });
  });

  // Managing active link

  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 350) {
          // Value can be adjusted
          setActiveLink(`#${section.id}`);
        }
      });
    });
  });

  return (
<<<<<<< HEAD
    <nav className="navbar">
      <img src={PClub_logo} alt="PClub Logo" className="logo" />
      <ul className={`list-container ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={() => setActiveLink("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#past-events"
            className={activeLink === "#past-events" ? "active" : ""}
            onClick={() => setActiveLink("#past-events")}
          >
            Past Events
          </a>
        </li>
        <li>
          <a
            href="#join-us"
            className={activeLink === "#join-us" ? "active" : ""}
            onClick={() => setActiveLink("#join-us")}
          >
            Join Us
          </a>
        </li>
        <li>
          <a
            href="#contact-us"
            className={activeLink === "#contact-us" ? "active" : ""}
            onClick={() => setActiveLink("#contact-us")}
          >
            Contact Us
          </a>
        </li>
      </ul>
      <img src={Bars} alt="Menu Bars" className="bars" onClick={toggleMenu} />
=======
    <nav className='navbar'>
        <img src={PClub_logo} alt="PClub Logo" className='logo'/>
        <ul className={`list-container ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link 
              to="/" 
              className={activeLink === "/" ? 'active' : ''}
              onClick={() => setActiveLink("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
              to="/past-events" 
              className={activeLink === "/past-events" ? 'active' : ''}
              onClick={() => setActiveLink("/past-events")}
              >
                Past Events
              </Link>
            </li>
            <li>
              <a 
              href="#join-us" 
              className={activeLink === "#join-us" ? 'active' : ''}
              onClick={() => setActiveLink("#join-us")}
              >
                Join Us
              </a>
            </li>
            <li>
              <a
              href="#contact-us" 
              className={activeLink === "#contact-us" ? 'active' : ''}
              onClick={() => setActiveLink("#contact-us")}
              >
                Contact Us
              </a>
            </li>
        </ul>
        <img src={Bars} alt="Menu Bars" className='bars' onClick={toggleMenu}/>
>>>>>>> 67d955ca81080bb6a770bf6ecd89abc913c8c6f9
    </nav>
  );
};

export default Navbar;

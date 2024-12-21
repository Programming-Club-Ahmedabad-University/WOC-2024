import React from "react";
import styles from "./FooterComponent.module.css";
import { Instagram, Linkedin } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.startfooter}>
        <h2>Become Community Member</h2>
        <div className={styles.inputcontainer}>
          <input type="email" placeholder="Enter your email" />
          <button>JOIN US</button>
        </div>
      </div>

      <div className={styles.Pages}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className={styles.partitionLine}></div>

      <div className={styles.pclubfooter}>
        <img
          src="src/assets/Pclub logo.jpeg"
          alt="Programming Club Logo"
          className={styles.logo}
        />
        <p className={styles.clubName}>The Programming Club</p>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/ahduni_programmingclub/">
          <Instagram size={48} color="#E1306C" />
        </a>

        <a href="https://discord.com">
          <SiDiscord size={48} color="#7289DA" />
        </a>

        <a href="https://www.linkedin.com/in/programming-club-42782b287">
          <Linkedin size={48} color="#0077B5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

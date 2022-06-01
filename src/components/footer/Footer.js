import React from "react";
import "../../style/style.css";
import { BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        Rospide Wilems
      </a>
      <ul className="footer__permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Kyofu666" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/haitian_art_509/?hl=fr"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UC5An9DIA7GcrXV9OK_CDtjA"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Wilems Rospide. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

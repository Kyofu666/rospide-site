import "../../style/style.css";
import React from "react";
import HeaderBtn from "./headerBtn";
import Me from "../../assets/Me.png";
import HeaderSocials from "./headerSocials";
function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Wilems Rospide</h1>
        <h5 className="text-light">Front-End Web Developer</h5>
        <HeaderBtn />
        <HeaderSocials />
        <div className="header__image">
          <img src={Me} alt="Wilems Rospide" />
        </div>
        <a href="#contact" className="header__scrollDown">
          Scrool Down
        </a>
      </div>
    </header>
  );
}

export default Header;

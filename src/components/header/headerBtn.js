import React from "react";
import CV from "../../assets/Wilems-Rospide.pdf";
function headerBtn() {
  return (
    <div className="header__cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className=" btn btn--primary">
        Let's Talk
      </a>
    </div>
  );
}

export default headerBtn;

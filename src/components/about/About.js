import React from "react";
import "../../style/style.css";
import Me from "../../assets/Me2.JPG";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about" className="about">
      <h5> Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__content__cards">
            <article className="about__content__cards__card">
              <FaAward className="about__content__cards__card__icon" />
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>

            <article className="about__content__cards__card">
              <VscFolderLibrary className="about__content__cards__card__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            saepe perferendis? Pariatur alias suscipit sunt aut distinctio quis,
            quae corrupti?
          </p>
          <a href="#contact" className="btn btn--primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

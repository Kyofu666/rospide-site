import "../../style/style.css";
import React from "react";
import { data } from "./data";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => {
          const { id, title, github, demo, img } = item;

          return (
            <article key={id} className=" portfolio__container__items">
              <div className="portfolio__container__items__image">
                <img src={img} alt="Todo-App" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__container__items__cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

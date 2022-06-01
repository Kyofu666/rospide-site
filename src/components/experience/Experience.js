import React from "react";
import "../../style/style.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h5>What are my skills </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__container__frontend">
          <h3>Frontend developement</h3>
          <div className="experience__container__frontent__content">
            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>GIT</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>
                  RESPONSIVE <br />
                  DESIGN
                </h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>APIs</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience__container__frontent__content__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>VISUAL STUDIO</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

import "../../style/style.css";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dg82iim",
        "template_1oc7asz",
        form.current,
        "y1q6AEfobRR4ZVzYc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__container__leftSide">
          <article className="contact__container__leftSide__option">
            <MdOutlineEmail className="contact__container__leftSide__option__icon" />
            <h4>Email</h4>
            <h5>wilems12@gmail.com</h5>
            <a
              href="mailto:wilems12@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__container__leftSide__option">
            <BsWhatsapp className="contact__container__leftSide__option__icon" />
            <h4>Whatsapp</h4>
            <h5>+509 42521970</h5>
            <a
              href="https://api.WhatsApp.com/send?phone=50942521970"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact__container__rightSide"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="10"
            required
          ></textarea>

          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

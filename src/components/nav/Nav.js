import "../../style/style.css";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={active === "#portfolio" ? "active" : ""}
        onClick={() => setActive("#portfolio")}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;

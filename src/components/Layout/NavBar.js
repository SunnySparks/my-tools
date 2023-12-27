import React from "react";
import { Link } from "gatsby";
//import "../../styles/global.scss";

const navOptions = [
  { link: "/", text: "Inicio" },
  { link: "/calculadora", text: "Calculadora" },
  { link: "/todo", text: "To-do List" },
];

const NavBar = () => {
  return (
    <div id="navCont">
      {navOptions.map(({ link, text }, i) => (
        <Link className="navLink" key={i} href={link}>
          {text}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;

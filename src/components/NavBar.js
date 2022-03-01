import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  //   const doc = document;
  //   const menuOpen = doc.querySelector(".menu");
  //   const menuClose = doc.querySelector(".close");
  //   const overlay = doc.querySelector(".overlay");

  //   menuOpen.addEventListener("click", () => {
  //     overlay.classList.add("overlay--active");
  //   });

  //   menuClose.addEventListener("click", () => {
  //     overlay.classList.remove("overlay--active");
  //   });
  return (
    <div>
      <header>
        <a className="logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Vous êtes un avocat?</a>
            </li>
            <li>
              <a href="#">Français</a>
            </li>
          </ul>
        </nav>
        <Link to="/moncompte">
          <a className="cta" href="moncompte">
            Mon Compte
          </a>
        </Link>

        <p className="menu cta">Menu</p>
      </header>
      <div id="mobile__menu" className="overlay">
        <a className="close">&times;</a>
        <div className="overlay__content">
          <Link to="/moncompte">
            <a href="moncompte">Vous êtes un avocat?</a>
          </Link>
          <Link to="/moncompte">
            <a href="moncompte">Mon Compte</a>
          </Link>
          <Link to="/moncompte">
            <a href="moncompte">Mon Compte</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

import { ReactComponent as LogoNauticRose } from "../images/logo.svg";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header>
      <div className="logo">
        <LogoNauticRose />
      </div>
      <nav>
        <button
          className={`hamburger hamburger--squeeze ${
            menuIsOpen ? "is-active" : ""
          }`}
          type="button"
          onMouseUp={handleClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <ul>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>¿Como funciona¿</li>
          <li>Contáctanos</li>
          <li>¿Quienes somos?</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

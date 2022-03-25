import React from "react";

import { ReactComponent as LogoNauticRose } from "../images/logo.svg";
import { ReactComponent as IconLanguage } from "../images/earth.svg";
import { ReactComponent as ChevronDown } from "../images/chevron-down.svg";

const Hero = () => {
  return (
    <section className="hero">
      <header>
        <div className="logo">
          <LogoNauticRose />
        </div>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>¿Como funciona¿</li>
            <li>Contáctanos</li>
            <li>¿Quienes somos?</li>
          </ul>
        </nav>
      </header>
      <h1>Páginas y Diseños eficaces</h1>
      <p>Personaliza tu marca o escoge una de nuestras mejores plantillas</p>
      <button>Proyectos</button>
      <button>Contáctanos</button>
      <div className="lang-selection">
        <button className="lang-selection-btn">
          <IconLanguage />
          <ChevronDown />
        </button>
        <div className="options">
          <button>ESP</button>
          <button>ENG</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

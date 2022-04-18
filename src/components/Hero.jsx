import React from "react";

import { ReactComponent as LogoNauticRose } from "../images/logo.svg";
import { ReactComponent as IconLanguage } from "../images/earth.svg";
import { ReactComponent as IconChevron } from "../images/chevron-down.svg";

import { ReactComponent as Margay } from "../images/hero-margay.svg";
// import HeroBG from "../images/hero-background.jpg";

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
      <div className="content">
        <div className="text-content">
          <h1>Páginas y Diseños eficaces</h1>
          <p>
            Personaliza tu marca o escoge una de nuestras mejores plantillas
          </p>
          <button>Proyectos</button>
          <button>Contáctanos</button>
        </div>
        <div className="decor">
          <Margay className="margay" />
          <div className="hero-bg">
            <div className="inner-container">
              {/* <img
                src={HeroBG}
                alt="Decoration Illustration"
                width="100%"
                height="100%"
              /> */}
            </div>
          </div>
        </div>
        <div className="lang-selection">
          <button className="lang-selection-btn">
            <IconLanguage />
            <IconChevron />
          </button>
          <div className="options">
            <button>ESP</button>
            <button>ENG</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

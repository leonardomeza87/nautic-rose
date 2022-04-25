import React from "react";

import { ReactComponent as IconLanguage } from "../images/earth.svg";
import { ReactComponent as IconChevron } from "../images/chevron-down.svg";

import { ReactComponent as Margay } from "../images/hero-margay.svg";
import HeroBackground from "../images/hero-background.jpg";

const Hero = () => {
  const pageScroll = () => {
    setInterval(() => {
      window.scrollBy(0, 30);
    }, 10);
  };

  return (
    <section className="hero">
      <div className="cover">
        <Margay className="margay" />
        <img src={HeroBackground} alt="Decoration Illustration" />
      </div>
      <div className="content">
        <h1>Páginas y Diseños eficaces</h1>
        <p>Personaliza tu marca o escoge una de nuestras mejores plantillas</p>

        <div className="cta">
          <button onClick={pageScroll}>Proyectos</button>
          <button className="orange">Contáctanos</button>
        </div>

        {/* <div className="lang-selection">
          <button className="lang-selection-btn">
            <IconLanguage />
            <IconChevron />
          </button>
          <div className="options">
            <button>ESP</button>
            <button>ENG</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

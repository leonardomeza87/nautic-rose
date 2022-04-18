import React from "react";

import { ReactComponent as SVGQuote } from "../images/format_quote_black_24dp.svg";

const About = () => {
  return (
    <section className="about">
      <h2 className="section-title white">¿Quiénes somos?</h2>
      <p className="section-subtitle white">
        Nautic Rose | FIND THE WAY WIHT US
      </p>
      <div className="text">
        <p className="quote">
          <SVGQuote />
        </p>
        <p>
          Somos una startup enfocada, rápida y efectiva Trabajamos en diseño,
          estrategia y tecnología, buscando mejorar continuamente. Supliendo las
          necesidades de tu marca y empresa en los medios digitales. Diseño
          Gráfico, Desarrollo WEB y Marketing Digital (SEO).
        </p>
        <p className="quote">
          <SVGQuote />
        </p>
      </div>
    </section>
  );
};

export default About;

import React from "react";

import Rope from "../images/rope.png";

import { ReactComponent as Style } from "../images/style_black_24dp.svg";
import { ReactComponent as Dev } from "../images/code_black_24dp.svg";
import { ReactComponent as Seo } from "../images/leaderboard_black_24dp.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="separator">
        <div className="box">
          <img className="rope" src={Rope} alt="rope" />
        </div>
      </div>
      <h2 className="section-title">Nuestros Servicios</h2>
      <p className="section-subtitle">
        Creamos productos llamativos y funcionales
      </p>
      <div className="card">
        <div className="image">
          <Style />
        </div>

        <div className="text">
          <h3>Diseño Gráfico</h3>
          <p>Conecta con tu público o transmite un mensaje</p>
          <ul>
            <li>Logotipos</li>
            <li>Flyers, Banners y Posters</li>
            <li>Post, Infografías y Revistas</li>
          </ul>
          <p>¿Necesitas algo más?, escribenos!</p>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <Dev />
        </div>

        <div className="text">
          <h3>Desarrollo WEB</h3>
          <p>Expande tu público y muestra lo que haces</p>
          <ul>
            <li>Paginas personalizadas o base de plantillas</li>
            <li>Blog personal</li>
            <li>Portafolio</li>
            <li>WEB corporativa</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <Seo />
        </div>

        <div className="text">
          <h3>Marketing Digital (SEO)</h3>
          <p>Alcanza el exito y rentabilidad deseada</p>
          <ul>
            <li>Optimización y Performance</li>
            <li>Posicionamiento en buscadores</li>
            <li>Estrategia digital y consultoría</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

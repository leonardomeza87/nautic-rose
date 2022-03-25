import React from "react";

const Services = () => {
  return (
    <section className="services">
      <h2>Nuestros Servicios</h2>
      <p>Creamos productos llamativos y funcionales</p>
      <div className="card">
        <div className="image"></div>

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
        <div className="image"></div>

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
        <div className="image"></div>

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

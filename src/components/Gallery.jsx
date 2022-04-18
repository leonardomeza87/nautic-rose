import React from "react";

import Project from "./Project";

import TestImage from "../images/test-image.jpg";
import TestImage2 from "../images/test-image-2.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="section-title">Nuestros proyectos</h2>
      <p className="section-subtitle">
        Echale un viztaso a nuestra galería de portafolio
      </p>
      <Project
        image={TestImage}
        title={"Cats project"}
        description={"With a lot of cats"}
        rating={4.5}
        likes={15}
      />
      <Project
        title={"Working Title"}
        description={"Test description"}
        rating={2}
        likes={5}
      />
      <Project
        image={TestImage2}
        title={"Dogs Project"}
        description={"Dogs are the best!"}
        rating={5}
        likes={30}
      />
      <button>- Ver más -</button>
    </section>
  );
};

export default Gallery;

import React from "react";

import { ReactComponent as Isotype } from "../images/new.svg";

import { ReactComponent as LogoFacebook } from "../images/logo-facebook.svg";
import { ReactComponent as LogoLinkedin } from "../images/logo-linkedin.svg";
import { ReactComponent as LogoInstagram } from "../images/logo-instagram.svg";
import { ReactComponent as LogoWhatsapp } from "../images/logo-whatsapp.svg";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title white">CONTÁCTANOS</h2>
      <p className="section-subtitle white">
        ¿Quieres comenzar un proyecto profesional?
      </p>

      <strong>¡Nosotros te asesoramos!</strong>

      <form>
        <p>¡Te responderemos muy pronto!</p>
        <input type="text" placeholder="Tu Nombre" />
        <input type="email" placeholder="Correo Electrónico" />
        <input type="text" placeholder="Título del mensaje" />
        <textarea
          name=""
          id=""
          cols="10"
          rows="4"
          placeholder="¡Escribe aquí tu mensaje!"
        ></textarea>
        <input type="submit" value="Enviar" />
        <div className="contact-info">
          <p>Ubicación: Maracay - Venezuela</p>
          <p>
            Teléfono: <a href="tel:+000000000000">+00(000) 000-00-00</a>
          </p>
          <p>
            E-mail: <a href="mailto:contact@website.com">contact@website.com</a>
          </p>
        </div>
      </form>

      <div className="logo">
        <Isotype />
      </div>

      <div className="social-media">
        <div className="item">
          <LogoInstagram />
        </div>
        <div className="item">
          <LogoLinkedin />
        </div>
        <div className="item">
          <LogoFacebook />
        </div>
        <div className="item">
          <LogoWhatsapp />
        </div>
      </div>
    </section>
  );
};

export default Contact;

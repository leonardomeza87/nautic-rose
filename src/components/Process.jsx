import React from "react";

const Process = () => {
  return (
    <section className="process">
      <h3>¿Cómo funciona?</h3>
      <p>Pasos para iniciar un proyecto</p>
      <div className="step">
        <span>1</span>
        <div className="text">
          <strong>Conversamos sobre tu idea</strong>
          <p>
            Seleccionas el tipo de proyecto, y te enviamos el presupuesto total
            en PDF con todas las especificaciones.
          </p>
        </div>
      </div>
      <div className="step">
        <span>2</span>
        <div className="text">
          <strong>Sí aceptas las condiciones</strong>
          <p>Nos aseguramos de cumplir y ofrecer el mejor servicio.</p>
        </div>
      </div>
      <div className="step">
        <span>3</span>
        <div className="text">
          <strong>Abona el pago</strong>
          <p>Paga el 50% del costo total al iniciar el proyecto.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;

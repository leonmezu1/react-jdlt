import React from "react";

const Cita = ({cita, eliminarCita}) => (
  <div>
    <h1>Listado</h1>
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>
    </div>
    <button className="button eliminar u-full-width" onClick={() => eliminarCita(cita.id)}>
      Eleminar &times;
    </button>
  </div>
);

export default Cita;

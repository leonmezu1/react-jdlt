import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const submitCita = (e) => {
    e.preventDefault();
    const checkEmpty = [
      mascota.trim() === "",
      propietario.trim() === "",
      fecha.trim() === "",
      hora.trim() === "",
      sintomas.trim() === "",
    ];
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
          onChange={handleChange}
          value={propietario}
        />
        <label>Fecha de ingreso</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora de ingreso</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Signos</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

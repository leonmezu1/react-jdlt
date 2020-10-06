import React, { Fragment, useState } from "react";
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false)

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

    if (checkEmpty.some((value) => value)) {
      actualizarError(true);
      return;
    } else {
      actualizarError(false);
      cita.id = uuid();
      crearCita(cita);
      actualizarCita({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: "",
      });
      return;
    }
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
      <form onSubmit={submitCita}>
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

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;

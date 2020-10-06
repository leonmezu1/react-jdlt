import React, { Fragment, useState } from 'react'

const Formulario = () => {
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

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
            />
            <label>Nombre Dueño</label>
            <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre del dueño de la mascota"
            onChange={handleChange}
            />
            <label>Fecha de ingreso</label>
            <input
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={handleChange}
            />
            <label>Hora de ingreso</label>
            <input
            type="time"
            name="hora"
            className="u-full-width"
            onChange={handleChange}
            />
            <label>Signos</label>
            <textarea className="u-full-width" name="sintomas" onChange={handleChange}></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar cita</button>
        </form>
        </Fragment>
    );
}

export default Formulario;
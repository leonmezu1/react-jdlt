import React, { Fragment, useState } from 'react'

const Formulario = () => {
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

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
            />
            <label>Nombre Dueño</label>
            <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre del dueño de la mascota"
            />
            <label>Fecha de ingreso</label>
            <input
            type="date"
            name="fecha"
            className="u-full-width"
            />
            <label>Hora de ingreso</label>
            <input
            type="time"
            name="hora"
            className="u-full-width"
            />
            <label>Signos</label>
            <textarea className="u-full-width" name="sintomas"></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar cita</button>
        </form>
        </Fragment>
    );
}

export default Formulario;
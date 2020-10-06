import React, { Fragment } from 'react'

export default class Formulario extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
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
            name="dueno"
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
        </form>
      </Fragment>
    );
  }
}

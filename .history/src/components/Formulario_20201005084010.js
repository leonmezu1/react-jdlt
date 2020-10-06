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
        </form>
      </Fragment>
    );
  }
}

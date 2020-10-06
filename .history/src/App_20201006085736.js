import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'

const App = () => {
  const [citas, guardarCitas] = useState([])

  const crearCita = cita => {
    console.log(cita);
  }
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className ="container">
        <div className="row">
          <div className="one-half-column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half-column">

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React, { Fragment, useState } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario'

const App = () => {
  const [citas, guardarCitas] = useState([])

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = id => {
    console.log(id)
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
            { citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            )) }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

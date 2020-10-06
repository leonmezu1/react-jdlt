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
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
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
            <h1>{citas.length > 0 ? "Agrega una cita" : "Listado"}</h1>
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

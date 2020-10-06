import React, { Fragment, useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario'

const App = () => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState([])

  useEffect(() =>{
    if(citasIniciales.length > 0) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales]) // Si cambia este estado

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
            <h1>{citas.length === 0 ? "Agrega una cita" : "Listado"}</h1>
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

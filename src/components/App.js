import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TarefaEntrada from './TarefaEntrada'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-3">
          <TarefaEntrada />
        </div>
      </div>
    </div>
  );
}

export default App;
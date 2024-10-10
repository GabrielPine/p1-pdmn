import React from 'react';

function TarefaEntrada() {
  return (
    <form>
      <input
        type="text"
        placeholder="Digite a descrição de uma nova tarefa"
        className="form-control text-center"
      />
      <button type="button" className="btn btn-primary mt-2 w-100 ">OK</button>
    </form>
  );
}

export default TarefaEntrada;
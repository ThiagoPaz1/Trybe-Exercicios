import React from 'react'
import '../App.css'
class Lista extends React.Component {
  render() {
    const compromissos = ['Estudar programação', 'Treinar', 'Continuar projeto de programação', 'Aerobico']
    const list = compromissos.map((lista) => <li className='list'>{lista}</li>) 
    return(
      <div>
        <h1>Lista de tarefas:</h1>
        {list}
     </div>
    );
  }
}

export default Lista
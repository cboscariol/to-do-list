import React, {useState} from 'react'
import './App.css';

function App() {
    const [tarefa, setTarefa] = useState('');
    const [listaTarefa, setListaTarefa] = useState([]);

    function addTarefa(event){
      setTarefa(event.target.value)
    }  

    function salvarTarefa(event){
        event.preventDefault()
        if(listaTarefa.includes(tarefa)){
          alert('Tarefa já existe na lista')
          setTarefa('');
          return
        }
        setListaTarefa([...listaTarefa, tarefa]);
        setTarefa('');
    }

    function excluirTarefa(taref) {
      setListaTarefa(listaTarefa.filter(task => {
        return task !== taref
      }))
    }




  return (
         <>
        <h1>Lista de tarefas</h1>
        <form action="" onSubmit={salvarTarefa}>
           <input type="text" placeholder='tarefa' value={tarefa} onChange={addTarefa}/>
        </form>
        <ul>
          {listaTarefa.map(task =>{ 
                return (
                  <>
                  <li>{task}<button onClick={() => excluirTarefa(task)}>X</button></li> 
                 
                  </>
                )
              })}
          
        </ul>
         </>
    
  )
}

export default App;

import React, { useContext } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { TodoListContext } from '../contexts/TodoListContext';

import '../styles/TasksList.css';

const TaskList = () =>{
  const {listaDeTarefas, handleRemoveTask, handleMoveTask} = useContext(TodoListContext);
  return (
    <div className="container">
      <div className="tasks">
        <h2>Minhas Tarefas</h2>

        <ul className="list">
          { listaDeTarefas.map((tarefas, index) => (
            <li key={index}>
            <input type="checkbox" onClick={() => handleMoveTask()}/>
            <input type="text" value={tarefas} readOnly={true} />
            <button onClick={() => handleRemoveTask(index)}>
              <IoTrashOutline/>
            </button>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskList;
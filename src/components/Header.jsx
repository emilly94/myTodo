import React, { useContext } from 'react';
import {FaCheck} from 'react-icons/fa'
import { TodoListContext } from '../contexts/TodoListContext';
import '../styles/Header.css';

const Header = () =>{
  const {tasksTitle, setTasksTitle, handleCreateNewTask} = useContext(TodoListContext);
  return(
    <div className="container">
      <header className="main-header">
        <div className="header-content">
          <h1>MyTodo</h1>

          <form>
            <input type="text" 
            className="input" 
            value={tasksTitle} 
            onChange={ (event) => {setTasksTitle(event.target.value)}}
            />

            <button type="button" 
            className="btn-add-task"
            onClick={handleCreateNewTask}>
              <FaCheck/>
            </button>
          </form>

          </div>
        </header>
      </div>
        

  )
}

export default Header;
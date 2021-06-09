import React from 'react';
import Header from './components/Header';
import TaskList from './components/TasksList';
import TodoListProvider from './contexts/TodoListContext';

import './styles/global.css';

function App() {
  return (
    <TodoListProvider>
      <Header/>
      <TaskList/>
    </TodoListProvider>
  );
}

export default App;

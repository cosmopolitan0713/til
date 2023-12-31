import React, { useState } from 'react';
import './App.css';
import { Title } from "./components/Title";
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';




function App() {
  const[taskList, setTaskList] = useState([]);

  return (
    <div className="Body">
      <Title />
      <InputForm  taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}


export default App;

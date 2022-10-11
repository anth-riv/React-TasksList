import React, { useState } from 'react';
import './App.css';

import { NewTask } from "./Presentational/NewTask"
import { TasksList } from "./Presentational/TasksList"

const App = () => {

  const [newTask, setNewTask] = useState({});
  
  const handleChange = ({ target }) => {
    const {name, value} = target
    setNewTask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const [allTasks, setAllTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) {
      return;
    }
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };
  
  return (
    <main>
      <h1>Tasks</h1>
      <NewTask 
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList
        allTasks={allTasks}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default App;

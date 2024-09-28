import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;

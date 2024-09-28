import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, { text: task, isDone: false }]);
  };

  const updateTask = (index, newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
  };

  const deleteDoneTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.isDone);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Done') return task.isDone;
    if (filter === 'To Do') return !task.isDone;
    return true; // For 'All'
  });

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={filteredTasks}
        setFilter={setFilter}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        filter={filter}
        deleteAllTasks={deleteAllTasks}
        deleteDoneTasks={deleteDoneTasks}
      />
    </div>
  );
};

export default App;

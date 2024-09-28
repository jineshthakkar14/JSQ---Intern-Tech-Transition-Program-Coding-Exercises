import React, { useState } from 'react';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">To-Do input</h1>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded p-2 flex-1"
          placeholder="Add a new task"
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded ml-2">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoList;

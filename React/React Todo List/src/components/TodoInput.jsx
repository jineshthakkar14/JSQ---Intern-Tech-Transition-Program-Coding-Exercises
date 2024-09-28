import React, { useState } from 'react';
import { FaPlus, FaTasks } from 'react-icons/fa';

const TodoInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="container mx-auto mt-6 p-2">
      <h1 className="text-xl font-bold mb-4 text-center">Add a Task</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
        <div className="flex items-center w-full">
          <FaTasks className="text-gray-500 mr-2 text-lg" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border rounded p-2 flex-grow text-sm" // Set fixed width
            placeholder="Add a new task"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mt-4 rounded flex items-center justify-center w-full text-sm" // Set fixed width
        >
          <FaPlus className="mr-2 text-lg" /> Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

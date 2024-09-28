import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

const TodoEdit = ({ task, index, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  useEffect(() => {
    setNewTask(task);
  }, [task]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      updateTask(index, newTask);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border rounded p-1 mr-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-1 rounded">
            Save
          </button>
        </form>
      ) : (
        <>
          <span>{task}</span>
          <button onClick={handleEditClick} className="text-blue-500 ml-2">
            <FaEdit />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoEdit;

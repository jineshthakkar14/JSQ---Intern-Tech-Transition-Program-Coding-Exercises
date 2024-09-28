import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const TodoCheck = ({ task, index, updateTask, deleteTask, toggleTask, isChecked }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const handleInputChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleUpdateTask = () => {
    updateTask(index, currentTask);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between w-full mb-2">
      <div className="flex-grow">
        <span className={isChecked ? 'line-through' : ''}>
          {isEditing ? (
            <div className="flex items-center">
              <input
                type="text"
                value={currentTask}
                onChange={handleInputChange}
                className="border p-1 rounded mr-2"
                onBlur={handleUpdateTask}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleUpdateTask();
                  }
                }}
              />
            </div>
          ) : (
            <span onClick={handleEditClick} style={{ cursor: 'pointer' }}>
              {task}
            </span>
          )}
        </span>
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleTask(index)}
        className="ml-2"
      />
      <FaEdit
        onClick={handleEditClick}
        className="cursor-pointer text-blue-500 ml-2"
        title="Edit Task"
      />
      <button onClick={() => deleteTask(index)} className="text-red-500 ml-2">
        Delete
      </button>
    </div>
  );
};

export default TodoCheck;

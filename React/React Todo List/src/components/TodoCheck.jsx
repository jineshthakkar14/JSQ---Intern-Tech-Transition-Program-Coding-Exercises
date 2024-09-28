import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
    <div className="border p-2 rounded mb-4 mt-2 shadow-md">
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex-grow">
          <span className={`font-bold text-lg ${isChecked ? 'line-through text-red-500' : ''}`}>
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
        <FaTrash
          onClick={() => deleteTask(index)}
          className="cursor-pointer text-red-500 ml-2"
          title="Delete Task"
        />
      </div>
    </div>
  );
};

export default TodoCheck;

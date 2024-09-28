import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const TodoCheck = ({ task, index, updateTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(task);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
    <div className="flex items-center justify-between w-full">
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
            <span
              onClick={handleEditClick}
              style={{ cursor: 'pointer' }}
            >
              {task}
            </span>
          )}
        </span>
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="ml-2"
      />
      <FaEdit
        onClick={handleEditClick}
        className="cursor-pointer text-blue-500 ml-2"
        title="Edit Task"
      />
    </div>
  );
};

export default TodoCheck;

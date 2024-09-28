import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const TodoDelete = ({ deleteTask, index }) => {
  const handleDeleteClick = () => {
    deleteTask(index);
  };

  return (
    <button onClick={handleDeleteClick} className="text-red-500 ml-2">
      <FaTrashAlt /> {/* The delete icon is placed inside TodoDelete */}
    </button>
  );
};

export default TodoDelete;

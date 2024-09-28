import React from 'react';

const TodoList = ({ tasks }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul className="list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

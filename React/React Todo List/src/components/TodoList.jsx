import React from 'react';
import TodoEdit from './TodoEdit'; // Ensure the path is correct

const TodoList = ({ tasks, updateTask }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul className="list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex items-center justify-between">
            <TodoEdit task={task} index={index} updateTask={updateTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

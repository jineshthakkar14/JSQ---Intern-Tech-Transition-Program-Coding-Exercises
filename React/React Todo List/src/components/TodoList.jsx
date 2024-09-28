import React from 'react';
import TodoDelete from './TodoDelete';
import TodoCheck from './TodoCheck';

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul className="list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex items-center justify-between">
            <TodoCheck task={task} index={index} updateTask={updateTask} />
            <TodoDelete deleteTask={deleteTask} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

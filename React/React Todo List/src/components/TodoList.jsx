import React from 'react';
import TodoCheck from './TodoCheck';

const TodoList = ({ tasks, setFilter, updateTask, deleteTask, toggleTask, filter }) => {
  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={() => setFilter('All')} 
          className={`px-4 py-2 border rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('To Do')} 
          className={`px-4 py-2 border rounded ${filter === 'To Do' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'}`}
        >
          To Do
        </button>
        <button 
          onClick={() => setFilter('Done')} 
          className={`px-4 py-2 border rounded ${filter === 'Done' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'}`}
        >
          Done
        </button>
      </div>
      {tasks.map((task, index) => (
        <TodoCheck
          key={index}
          task={task.text}
          index={index}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          isChecked={task.isDone}
        />
      ))}
    </div>
  );
};

export default TodoList;

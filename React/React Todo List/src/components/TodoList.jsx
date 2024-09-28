import React from 'react';
import TodoCheck from './TodoCheck';

const TodoList = ({ tasks, setFilter, updateTask, deleteTask, toggleTask, filter, deleteAllTasks, deleteDoneTasks }) => {
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

      {tasks.length > 0 ? (
        <>
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

          <div className="mt-4">
            <button 
              onClick={deleteDoneTasks} 
              className="px-4 py-2 bg-red-500 text-white rounded mr-2"
            >
              Delete Done Tasks
            </button>
            <button 
              onClick={deleteAllTasks} 
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Delete All Tasks
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500">No tasks available. Add some tasks to get started!</p>
      )}
    </div>
  );
};

export default TodoList;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/taskSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="flex items-center space-x-2 p-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;

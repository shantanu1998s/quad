import React from 'react';

import TaskList from './component/TaskList';
import TaskInput from './component/TaskInput';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center" >
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4 ">To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;

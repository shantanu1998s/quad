import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="mt-4">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks available. Add a task above.</p>
      )}
    </div>
  );
};

export default TaskList;

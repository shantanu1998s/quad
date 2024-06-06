import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from './redux/taskSlice';

const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleDelete = () => {
    dispatch(deleteTask(index));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ index, newTask }));
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mt-2">
      {isEditing ? (
        <div className="flex items-center space-x-2 flex-1 ">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex-1">
          <span>{task}</span>
        </div>
      )}
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

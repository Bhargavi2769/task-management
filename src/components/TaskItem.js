import React from 'react';
import { updateTask, deleteTask } from '../services/api';

const TaskItem = ({ task, token }) => {
  const handleDelete = async () => {
    try {
      await deleteTask(token, task.id);
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  const handleStatusChange = async (status) => {
    try {
      const updatedTask = { ...task, status };
      await updateTask(token, task.id, updatedTask);
    } catch (err) {
      console.error('Error updating task status', err);
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => handleStatusChange('In Progress')}>In Progress</button>
      <button onClick={() => handleStatusChange('Completed')}>Completed</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;

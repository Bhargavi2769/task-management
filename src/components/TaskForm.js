import React, { useState } from 'react';
import { createTask } from '../services/api';

const TaskForm = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = { title, description, status };
      await createTask(token, taskData);
      setTitle('');
      setDescription('');
      setStatus('To Do');
    } catch (err) {
      console.error('Error creating task', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;

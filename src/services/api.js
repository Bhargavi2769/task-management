import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (username, password) =>
  api.post('/auth/register', { username, password });

export const loginUser = (username, password) =>
  api.post('/auth/login', { username, password });

export const fetchTasks = (token) =>
  api.get('/tasks', { headers: { Authorization: `Bearer ${token}` } });

export const createTask = (token, taskData) =>
  api.post('/tasks', taskData, { headers: { Authorization: `Bearer ${token}` } });

export const updateTask = (token, taskId, taskData) =>
  api.put(`/tasks/${taskId}`, taskData, { headers: { Authorization: `Bearer ${token}` } });

export const deleteTask = (token, taskId) =>
  api.delete(`/tasks/${taskId}`, { headers: { Authorization: `Bearer ${token}` } });

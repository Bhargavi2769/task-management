import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import './Dashboard.css'; // import CSS

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetchTasks(token);
      setTasks(response.data);
      setFilteredTasks(response.data);
    };

    getTasks();
  }, [token]);

  const handleFilterChange = (status) => {
    setStatusFilter(status);
    if (status === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === status));
    }
  };

  return (
    <div>
      <h2>Task Dashboard</h2>
      <TaskFilter statusFilter={statusFilter} onFilterChange={handleFilterChange} />
      <TaskForm token={token} />
      <TaskList tasks={filteredTasks} token={token} />
    </div>
  );
};

export default Dashboard;

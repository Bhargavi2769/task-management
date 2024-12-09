import React from 'react';

const TaskFilter = ({ statusFilter, onFilterChange }) => {
  return (
    <div>
      <label>Filter by Status: </label>
      <select value={statusFilter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilter;

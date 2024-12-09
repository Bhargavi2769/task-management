import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, token }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} token={token} />
      ))}
    </div>
  );
};

export default TaskList;

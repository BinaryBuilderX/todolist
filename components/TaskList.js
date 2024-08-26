// src/components/TaskList.js
import React from 'react';

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

// src/components/TaskInput.js
import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;

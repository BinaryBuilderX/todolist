// src/App.js
import React, { useState } from 'react';
import TaskBoard from './components/TaskBoard';
import './App.css';

function App() {
  // State to manage task boards
  const [taskBoards, setTaskBoards] = useState([
    { id: 1, title: 'Design Dept' },
    { id: 2, title: 'Web Dev' },
    { id: 3, title: 'Personal' }
  ]);

  // Function to add a new task board
  const addTaskBoard = () => {
    const newBoardTitle = prompt('Enter the title of the new task board:');
    if (newBoardTitle) {
      const newTaskBoard = {
        id: Date.now(), // Use Date.now() to generate a unique ID
        title: newBoardTitle
      };
      setTaskBoards([...taskBoards, newTaskBoard]);
    }
  };

  // Function to delete a task board
  const deleteTaskBoard = (boardId) => {
    setTaskBoards(taskBoards.filter(board => board.id !== boardId));
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h1>To-Do App</h1>
        <button onClick={addTaskBoard}>Add Task Board</button>
      </div>
      <div className="main-content">
        {taskBoards.map(board => (
          <div key={board.id} className="task-board-container">
            <TaskBoard title={board.title} />
            <button className="delete-board-button" onClick={() => deleteTaskBoard(board.id)}>Delete Board</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

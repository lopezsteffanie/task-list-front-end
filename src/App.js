import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
    isDelete: false
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
    isDelete: false
  },
];

const App = () => {
  const [data, setData] = useState(TASKS);
  const updateTasks = (updatedTask) => {
    const tasks = data.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setData(tasks);
  };
  const deleteTask = id => {
    setData(data => data.filter(task => {
      return task.id !== id;
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={data} 
        onUpdateTask={updateTasks}
        onDelete={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;

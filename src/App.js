import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return; // Ignorar tarefas vazias
    setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
    setNewTaskText('');
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = tasks.length === 0 ? 0 : (completedTasks / tasks.length) * 100;

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Nova tarefa"
          className="task-input"
        />
        <button type="submit" className="add-button">Adicionar</button>
      </form>

      <div className="progress">
        <h2>Progresso: {progress.toFixed(2)}%</h2>
      </div>

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onRemove={removeTask}
      />
    </div>
  );
}

export default App;

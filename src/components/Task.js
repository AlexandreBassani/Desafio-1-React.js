import React from 'react';
import './Task.css'; // Importar o CSS para o componente

const Task = ({ task, onToggle, onRemove }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        id={`task-${task.id}`}
      />
      <label htmlFor={`task-${task.id}`} className="task-label">
        {task.text}
      </label>
      <button className="remove-button" onClick={() => onRemove(task.id)}>Remover</button>
    </div>
  );
};

export default Task;

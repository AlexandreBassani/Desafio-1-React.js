import React from 'react';
import Task from './Task';
import './TaskList.css'; // Importar o CSS para o componente

const TaskList = ({ tasks, onToggle, onRemove }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TaskList;

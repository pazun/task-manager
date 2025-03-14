import { useState } from 'react';
import Task from '../components/task';

function Tasks({ tasks, onToggleComplete }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tasksByCategory = {
    PERSONAL: filteredTasks.filter(task => task.category === 'PERSONAL'),
    DESIGN: filteredTasks.filter(task => task.category === 'DESIGN'),
    HOUSE: filteredTasks.filter(task => task.category === 'HOUSE')
  };

  return (
    <div className="main-content">
      <div className="search-bar">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input
          type="text"
          placeholder="Search Task"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="tasks-container">
        {Object.entries(tasksByCategory).map(([category, tasks]) => (
          tasks.length > 0 && (
            <div key={category} className="task-section">
              <h2 className="section-header">{category}</h2>
              <div className="task-list">
                {tasks.map(task => (
                  <Task
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                  />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Tasks;
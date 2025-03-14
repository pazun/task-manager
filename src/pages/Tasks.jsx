import { useState } from 'react';
import Task from '../components/task';

function Tasks({ tasks, onToggleComplete }) {
  const [searchQuery, setSearchQuery] = useState('');

const filteredTasks = [];
for (let i = 0; i < tasks.length; i++) {
  const taskTitle = tasks[i].title.toLowerCase();
  const searchText = searchQuery.toLowerCase();
  if (taskTitle.includes(searchText)) {
    filteredTasks.push(tasks[i]);
  }
}

const tasksByCategory = {};

for (let i = 0; i < filteredTasks.length; i++) {
  const task = filteredTasks[i];
  if (task.category === 'PERSONAL') {
    if (!tasksByCategory.PERSONAL) {
      tasksByCategory.PERSONAL = [];
    }
    tasksByCategory.PERSONAL.push(task);
  } else if (task.category === 'DESIGN') {
    if (!tasksByCategory.DESIGN) {
      tasksByCategory.DESIGN = [];
    }
    tasksByCategory.DESIGN.push(task);
  } else if (task.category === 'HOUSE') {
    if (!tasksByCategory.HOUSE) {
      tasksByCategory.HOUSE = [];
    }
    tasksByCategory.HOUSE.push(task);
  }
}

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
    {(() => {
      const categories = Object.keys(tasksByCategory);
      const elements = [];
      
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const tasks = tasksByCategory[category];
        
        if (tasks.length > 0) {
          const taskElements = [];
          
          for (let j = 0; j < tasks.length; j++) {
            taskElements.push(
              <Task
                key={tasks[j].id}
                task={tasks[j]}
                onToggleComplete={onToggleComplete}
              />
            );
          }
          
          elements.push(
            <div key={category} className="task-section">
              <h2 className="section-header">{category}</h2>
              <div className="task-list">
                {taskElements}
              </div>
            </div>
          );
        }
      }
      
      return elements;
    })()}
  </div>
</div>
  );
}

export default Tasks;
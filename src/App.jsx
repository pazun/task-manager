import { useState } from 'react';
import SidePanel from './components/SidePanel';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import './styles/App.css';
import './styles/Sidebar.css';
import './styles/Task.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Stretch for 15 minutes', category: 'PERSONAL', completed: false },
    { id: 2, title: 'Plan your meal', category: 'PERSONAL', completed: false },
    { id: 3, title: 'Review daily goals before sleeping', description: "Add some new if time permits", category: 'PERSONAL', completed: false },
    { id: 4, title: 'Create icons for a dashboard', category: 'DESIGN', completed: false },
    { id: 5, title: 'Prepare a design presentation', category: 'DESIGN', completed: false },
    { id: 6, title: 'Water indoor plants', category: 'HOUSE', completed: false }
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

const handleToggleComplete = (taskId) => {
  let updatedTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      let updatedTask = {
        id: tasks[i].id,
        title: tasks[i].title,
        category: tasks[i].category,
        completed: !tasks[i].completed
      };
      if (tasks[i].description) {
        updatedTask.description = tasks[i].description;
      }
      updatedTasks.push(updatedTask);
    } else {
      updatedTasks.push(tasks[i]);
    }
  }
  setTasks(updatedTasks);
};

const handleAddTask = (newTask) => {
  if (newTask) {
    let updatedTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      updatedTasks[i] = tasks[i];
    }
    updatedTasks[tasks.length] = newTask;
    setTasks(updatedTasks);
  }
  setShowAddTask(false);
};

  const [currentView, setCurrentView] = useState('tasks');

  return (
    <div className="app-container">
      <SidePanel 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        onAddTask={function() { setShowAddTask(true) }} 
      />
      <main className="main-content">
        {function() {
          let filteredTasks = [];
          for (let i = 0; i < tasks.length; i++) {
            if (currentView === 'tasks') {
              if (!tasks[i].completed) {
                filteredTasks.push(tasks[i]);
              }
            } else if (currentView === 'completed') {
              if (tasks[i].completed) {
                filteredTasks.push(tasks[i]);
              }
            }
          }
          return <Tasks tasks={filteredTasks} onToggleComplete={handleToggleComplete} />;
        }()}
        {function() {
          if (showAddTask) {
            return <AddTask onAddTask={handleAddTask} />;
          }
          return null;
        }()}
      </main>
    </div>
  );
}

export default App;

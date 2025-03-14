import { useState } from 'react';
import SidePanel from './components/SidePanel';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import './styles/App.css';
import './styles/Sidebar.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Stretch for 15 minutes', category: 'PERSONAL', completed: false },
    { id: 2, title: 'Plan your meal', category: 'PERSONAL', completed: false },
    { id: 3, title: 'Review daily goals before sleeping', category: 'PERSONAL', completed: false },
    { id: 4, title: 'Create icons for a dashboard', category: 'DESIGN', completed: false },
    { id: 5, title: 'Prepare a design presentation', category: 'DESIGN', completed: false },
    { id: 6, title: 'Water indoor plants', category: 'HOUSE', completed: false }
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = (newTask) => {
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
    setShowAddTask(false);
  };

  const [currentView, setCurrentView] = useState('tasks');

  return (
    <div className="app-container">
      <SidePanel currentView={currentView} onViewChange={setCurrentView} onAddTask={() => setShowAddTask(true)} />
      <main className="main-content">
        {currentView === 'tasks' && (
          <Tasks tasks={tasks.filter(t => !t.completed)} onToggleComplete={handleToggleComplete} />
        )}
        {currentView === 'completed' && (
          <Tasks tasks={tasks.filter(t => t.completed)} onToggleComplete={handleToggleComplete} />
        )}
        {showAddTask && <AddTask onAddTask={handleAddTask} />}
      </main>
    </div>
  );
}

export default App;

function SidePanel({ currentView, onViewChange, onAddTask }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/>
        </svg>
        <span>Taski</span>
      </div>
      <nav className="nav-buttons">
        <button 
          onClick={() => onViewChange('tasks')} 
          className={`nav-item ${currentView === 'tasks' ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
          </svg>
          Task
        </button>
        <button 
          onClick={() => onViewChange('completed')} 
          className={`nav-item ${currentView === 'completed' ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
          </svg>
          Completed
        </button>
      </nav>
      <button className="sidebar-add-task" onClick={onAddTask}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        Add Task
      </button>
    </div>
  );
}

export default SidePanel;
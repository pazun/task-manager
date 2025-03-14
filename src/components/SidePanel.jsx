function SidePanel({ currentView, onViewChange, onAddTask }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <img 
          src="/images/logotaskee.png" 
          alt="Taski Logo" 
          style={{width: '36px', height: '36px'}}
        />
        <span>Taski</span>
      </div>
      
      <button className="nav-item" onClick={onAddTask}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        Add Task
      </button>

      <nav className="nav-buttons">
        {['tasks', 'completed'].map(view => {
          let buttonClass = "nav-item";
          if (currentView === view) {
            buttonClass += " active";
          }

          let pathData = "";
          if (view === 'tasks') {
            pathData = "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z";
          } else {
            pathData = "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z";
          }

          return (
            <button 
              key={view}
              onClick={() => onViewChange(view)}
              className={buttonClass}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d={pathData}/>
              </svg>
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default SidePanel;
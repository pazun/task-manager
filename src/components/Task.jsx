
function Task({ task, onToggleComplete }) {
  return (
    <div className="task-item">
      <div
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggleComplete(task.id)}
      />
      <div className="task-content">
        <div className={`task-title ${task.completed ? 'completed' : ''}`}>
          {task.title}
        </div>
        {task.description && <p>{task.description}</p>}
      </div>
    </div>
  );
}

export default Task
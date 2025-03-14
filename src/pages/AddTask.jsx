import { useState } from 'react';

import '../styles/AddTask.css';

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('PERSONAL');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      category,
      completed: false
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setCategory('PERSONAL');
  };

  return (
    <div className="add-task-page">
      <div className="add-task-container">
        <h2 className="add-task-header">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="PERSONAL">Personal</option>
              <option value="DESIGN">Design</option>
              <option value="HOUSE">House</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="button" className="button button-secondary" onClick={() => onAddTask(null)}>
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
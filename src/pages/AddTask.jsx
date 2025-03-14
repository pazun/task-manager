import { useState } from 'react';

import '../styles/AddTask.css';

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('PERSONAL');

function handleSubmit(e) {
  e.preventDefault();
  
  let newTask = {};
  newTask.id = Date.now();
  newTask.title = title;
  newTask.description = description;
  newTask.category = category;
  newTask.completed = false;
  
  onAddTask(newTask);
  
  setTitle('');
  setDescription('');
  setCategory('PERSONAL');
}

  return (
    <div className="add-task-page">
      <div className="add-task-container">
        <h2 className="add-task-header">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          {}
          {[
            {
              label: 'Title',
              type: 'input',
              id: 'title',
              value: title,
              onChange: function(e) {
                setTitle(e.target.value);
              },
              required: true
            },
            {
              label: 'Description', 
              type: 'textarea',
              id: 'description',
              value: description,
              onChange: function(e) {
                setDescription(e.target.value);
              }
            }
          ].map(function(field) {
            return (
              <div className="form-group" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === 'input' ? (
                  <input
                    type="text"
                    id={field.id}
                    value={field.value}
                    onChange={field.onChange}
                    required={field.required}
                  />
                ) : (
                  <textarea
                    id={field.id}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              </div>
            );
          })}

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={function(e) {
                setCategory(e.target.value);
              }}
            >
              {['PERSONAL', 'DESIGN', 'HOUSE'].map(function(option) {
                return (
                  <option key={option} value={option}>
                    {option.charAt(0) + option.slice(1).toLowerCase()}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="button button-secondary"
              onClick={function() {
                onAddTask(null);
              }}
            >
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
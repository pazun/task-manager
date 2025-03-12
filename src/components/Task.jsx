
function Task({task}){
    return <div className="task-block">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.date}</p>
    </div>
}

export default Task
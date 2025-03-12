import { Task } from "../components/task";

function Tasks({ tasks }){
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(SearchQuery)
    );
    return(
        <div className="Tasks">
            <div className="TasksList">
                {filteredTasks.map(task =>(
                    <Task
                        key = {task.id}
                        task = {task}    
                    />
                ))}
            </div>
        </div>
    )
}

export default Tasks;
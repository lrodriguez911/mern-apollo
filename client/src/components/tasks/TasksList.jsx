import { TaskCard } from "./TaskCard.jsx";

export function TasksList({ tasks }) {
  return (
    <div>
        <h1>Tasks:</h1>
        {tasks.map((task) => (
                <TaskCard task={task} key={task._id}/>
            )  
        )}
     
    </div>
  )
}

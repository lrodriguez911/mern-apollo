import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../graphql/projects.js'
import { TasksList } from '../components/tasks/TasksList.jsx';
import { TaskForm } from '../components/tasks/TaskForm.jsx';

export function ProjectDetails() {

  const params = useParams()
  const {data, loading, error} =  useQuery(GET_PROJECT, {
    variables:{
      id: params.projectId
    },
    skip: !params.projectId,
  });

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error!</p>

  return (
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>Delete</button>
      <TasksList tasks={data.project.tasks}/>
      <TaskForm />
    </div>
  )
}

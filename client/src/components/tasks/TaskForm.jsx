import { useMutation } from "@apollo/client";
import { CREATE_TASK } from '../../graphql/tasks.js'
import { useParams } from 'react-router-dom'

export function TaskForm() {

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [
        
    ]
  })  
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createTask({
        variables:{
            title: e.target.values,
            projectId: params.id
        }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button>Add</button>
    </form>
  );
}

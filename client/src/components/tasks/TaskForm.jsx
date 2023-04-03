import { useMutation } from "@apollo/client";
import { CREATE_TASK } from '../../graphql/tasks.js'
import { useParams } from 'react-router-dom'

export function TaskForm() {

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [
        'getProject'
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
    });
    e.target.reset()
    e.target.focus()
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" className="bg-zinc-900 text-white w-full p-2 rounded-lg mb-2" placeholder="Add a Task"/>
      <button
      className="bg-sky-900 text-white w-full p-2 rounded-lg">Add</button>
    </form>
  );
}

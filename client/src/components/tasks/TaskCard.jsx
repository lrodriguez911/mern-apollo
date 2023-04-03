import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";
import { AiOutlineDelete } from "react-icons/ai"

export function TaskCard({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });

  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between">
      <h2 className="text-sm">{task.title}</h2>
      <button
      className="bg-red-500 px-3 py-2"
        onClick={() => {
          deleteTask({
            variables: { id: task._id },
          });
        }}
      >
       <AiOutlineDelete/>
      </button>
    </div>
  );
}

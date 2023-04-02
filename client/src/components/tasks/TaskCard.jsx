import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";

export function TaskCard({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });

  return (
    <div>
      <h2>{task.title}</h2>
      <button
        onClick={() => {
          deleteTask({
            variables: { id: task._id },
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}

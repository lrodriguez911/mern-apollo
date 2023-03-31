export function TaskCard({ task }) {
  return (
    <div>
        <h2>{task.title}</h2>
        <button>Delete</button>
    </div>
  )
}

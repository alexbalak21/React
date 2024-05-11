import {useState} from "react"

interface Task {
  id: number
  description: string
  completed: boolean
}

interface Props {
  tasks: Task[]
  complete: (id: number) => void
  deleteTask: (id: number) => void
  updateTask: (id: number) => void
}

function Tasks({tasks, complete, deleteTask, updateTask}: Props) {
  const [hideTaskId, setHideTask] = useState(-1)
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th className="col-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((t) => (
          <tr key={t.id} className={hideTaskId === t.id ? "d-none" : ""}>
            <td className={t.completed ? "pt-3 bg-success bg-opacity-25" : "pt-3"}>{t.description}</td>
            <td>
              <button onClick={() => complete(t.id)} className={t.completed ? "mx-2 btn btn-success" : "mx-2 btn btn-outline-success"}>
                Complete
              </button>
              <button onClick={() => updateTask(t.id)} className="btn btn-primary mx-2">
                Update
              </button>
              <button onClick={() => deleteTask(t.id)} className="btn btn-danger mx-2">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tasks

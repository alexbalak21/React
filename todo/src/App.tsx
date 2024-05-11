import {useState} from "react"
import Tasks from "./components/Tasks"
import Form from "./components/Form"

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, description: "Task description", completed: false},
    {id: 2, description: "Learn React", completed: false},
  ])
  const [updateTaskId, setUpdateTaskId] = useState(-1)
  return (
    <main className="container">
      <div className="my-4">
        <Form
          id={updateTaskId}
          description={updateTaskId !== -1 ? tasks.find((t) => t.id === updateTaskId)?.description : ""}
          addTask={(description) => setTasks([...tasks, {id: tasks[tasks.length - 1].id + 1, description, completed: false}])}
          updateTask={(id, description) => setTasks(tasks.map((t) => (t.id !== id ? t : {...t, description: description})))}
        />
      </div>
      <Tasks
        tasks={tasks}
        complete={(id) => setTasks(tasks.map((t) => (t.id !== id ? t : {...t, completed: !t.completed})))}
        deleteTask={(id) => setTasks(tasks.filter((t) => t.id !== id))}
        updateTask={(id) => setUpdateTaskId(id)}
      />
    </main>
  )
}

export default App

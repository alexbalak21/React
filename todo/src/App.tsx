import {useState} from "react"
import Tasks from "./components/Tasks"
import Form from "./components/Form"

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, description: "Complete React tutorial", completed: true},
    {id: 2, description: "Write project proposal", completed: false},
    {id: 3, description: "Buy groceries", completed: false},
    {id: 4, description: "Exercise for 30 minutes", completed: false},
    {id: 5, description: "Read book for 1 hour", completed: false},
    {id: 6, description: "Call mom", completed: false},
    {id: 7, description: "Pay bills", completed: false},
    {id: 8, description: "Finish coding assignment", completed: false},
    {id: 9, description: "Schedule dentist appointment", completed: false},
    {id: 10, description: "Plan weekend trip", completed: false},
    {id: 11, description: "Clean the house", completed: false},
    {id: 12, description: "Attend team meeting", completed: false},
    {id: 13, description: "Prepare presentation slides", completed: false},
    {id: 14, description: "Review project documentation", completed: false},
    {id: 15, description: "Organize desk", completed: false},
    {id: 16, description: "Learn new recipe", completed: false},
    {id: 17, description: "Watch educational video", completed: false},
    {id: 18, description: "Walk the dog", completed: false},
    {id: 19, description: "Write blog post", completed: false},
    {id: 20, description: "Practice coding exercises", completed: false},
    {id: 21, description: "Clean out the garage", completed: false},
    {id: 22, description: "Update resume", completed: false},
    {id: 23, description: "Go for a hike", completed: false},
    {id: 24, description: "Research new hobby", completed: false},
    {id: 25, description: "Call a friend", completed: false},
    {id: 26, description: "Start a journal", completed: false},
    {id: 27, description: "Organize digital files", completed: false},
    {id: 28, description: "Try a new recipe", completed: false},
    {id: 29, description: "Practice meditation", completed: false},
    {id: 30, description: "Create a budget plan", completed: false},
    {id: 31, description: "Volunteer at local shelter", completed: false},
    {id: 32, description: "Explore nearby park", completed: false},
    {id: 33, description: "Listen to a podcast", completed: false},
    {id: 34, description: "Do a home workout", completed: false},
    {id: 35, description: "Research vacation destinations", completed: false},
    {id: 36, description: "Fix broken item at home", completed: false},
    {id: 37, description: "Write thank-you notes", completed: false},
    {id: 38, description: "Create a meal plan for the week", completed: false},
    {id: 39, description: "Update social media profiles", completed: false},
    {id: 40, description: "Explore local art gallery", completed: false},
  ])
  const [updateTaskId, setUpdateTaskId] = useState(-1)
  return (
    <main className="container">
      <div className="my-4">
        <Form
          id={updateTaskId}
          description={updateTaskId !== -1 ? tasks.find((t) => t.id === updateTaskId)?.description : ""}
          addTask={(description) => setTasks([...tasks, {id: tasks[tasks.length - 1].id + 1, description, completed: false}])}
          updateTask={(id, description) => {
            setTasks(tasks.map((t) => (t.id !== id ? t : {...t, description: description})))
            setUpdateTaskId(-1)
          }}
        />
      </div>
      <Tasks
        tasks={tasks}
        updatedTask={updateTaskId}
        complete={(id) => setTasks(tasks.map((t) => (t.id !== id ? t : {...t, completed: !t.completed})))}
        deleteTask={(id) => setTasks(tasks.filter((t) => t.id !== id))}
        updateTask={(id) => setUpdateTaskId(id)}
      />
    </main>
  )
}

export default App

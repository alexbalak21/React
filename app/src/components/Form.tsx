import { FormEvent, useState } from "react"

function Form() {
  const [person, setPerson] = useState({ name: "", age: 0 })
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(person)
  }

  return (
    <form onSubmit={onSubmit} className="my-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form

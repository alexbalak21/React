import { FormEvent } from "react"

function Form() {
  function onSubmit(event: FormEvent) {
    event.preventDefault()
    console.log("Submit")
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input id="name" type="text" />
      <br />
      <button>Submit</button>
    </form>
  )
}

export default Form

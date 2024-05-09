import {FormEvent} from "react"

function Form() {
    return (
        <form
            onSubmit={(e: FormEvent) => {
                e.preventDefault()
                console.log("Submit")
            }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input id="name" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input id="age" type="number" className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form

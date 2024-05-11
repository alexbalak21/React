import {useForm, FieldValues} from "react-hook-form"

interface FormData {
  description: string
}

interface Task {
  id: number
  description: string
}

interface Props {
  id?: number
  description?: string
  updateTask: (id: number, description: string) => void
  addTask: (description: string) => void
}

function Form({id = -1, description = "", addTask, updateTask}: Props) {
  const {register, handleSubmit, reset} = useForm<FormData>()

  const onSubmit = (formData: FieldValues) => {
    if (id !== -1) {
      updateTask(id, formData.description)
      console.log("Update ", id, formData.description)
    } else addTask(formData.description)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-between flex-wrap">
      <label htmlFor="description" className="form-label w-100">
        Description
      </label>
      <div className="col-lg-9">
        <input className="form-control" placeholder={description} id="description" type="text" {...register("description")} />
      </div>
      <button className="btn btn-success mx-5">Add</button>
    </form>
  )
}

export default Form

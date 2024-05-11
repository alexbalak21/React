import {useForm, FieldValues} from "react-hook-form"

type FormData = {
  description: string
  price: number
  category: string
}

interface Props {
  categories: string[]
  addExpense: (expense: FieldValues) => void
}

function Form({categories, addExpense}: Props) {
  const {register, handleSubmit} = useForm<FormData>()

  const onSubmit = (formData: FieldValues) => addExpense(formData)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-5">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" {...register("description")} />
      </div>
      <div className="mb-3">
        <label htmlFor="pice" className="form-label">
          Price
        </label>
        <input id="price" type="number" className="form-control" {...register("price")} />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option defaultValue="" value=""></option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  )
}

export default Form

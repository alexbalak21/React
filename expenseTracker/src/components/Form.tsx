import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"

interface Props {
  categories: readonly string[]
  addExpense: (expense: ExpenseFormData) => void
}

const categories = ["Groceries", "Transportation", "Entertainment", "Dining", "Utilities", "Shopping", "Healthcare"] as const

const schema = z.object({
  description: z.string().min(3, {message: "Description should be at least 3 characters."}).max(255),
  price: z.number({invalid_type_error: "Price is required"}).min(0.1).max(10000),
  category: z.enum(categories, {errorMap: () => ({message: "Category is required."})}),
})

type ExpenseFormData = z.infer<typeof schema>

function Form({categories, addExpense}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<ExpenseFormData>({resolver: zodResolver(schema)})

  return (
    <form
      onSubmit={handleSubmit((data) => {
        addExpense(data)
        reset()
      })}
      className="my-5">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className={errors.description ? "form-control is-invalid" : "form-control"}
          {...register("description")}
        />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="pice" className="form-label">
          Price
        </label>
        <input
          step="any"
          id="price"
          type="number"
          className={errors.price ? "form-control is-invalid" : "form-control"}
          {...register("price", {valueAsNumber: true})}
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className={errors.category ? "form-select is-invalid" : "form-select"} {...register("category")}>
          <option defaultValue="" value=""></option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  )
}

export default Form

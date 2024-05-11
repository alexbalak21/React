import {ChangeEvent, useState} from "react"

interface Props {
  id: number
  category: string
  description: string
  price: number
}

interface ExpensesProps {
  expensesData: Props[]
  deleteExpense: (id: number) => void // Function to delete an expense by ID
}

function Expenses({expensesData, deleteExpense}: ExpensesProps) {
  const categories = [...new Set(expensesData.map((expense) => expense.category))]
  const [category, setCategory] = useState("")

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)

  return (
    <div className="my-5">
      <div className="mb-4">
        <select onChange={handleSelectChange} id="category" className="form-select">
          <option defaultValue="" value="">
            All
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th className="col-1 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {expensesData
              .filter((expense) => (category === "" ? true : expense.category === category))
              .map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>${expense.price.toFixed(2)}</td>
                  <td>{expense.category}</td>
                  <td className="text-center">
                    <button className="btn btn-outline-danger" onClick={() => deleteExpense(expense.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            <tr>
              <td>Total</td>
              <td colSpan={3}>
                $
                {expensesData
                  .filter((expense) => (category === "" ? true : expense.category === category))
                  .map((expense) => expense.price)
                  .reduce((total, price) => total + price, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Expenses

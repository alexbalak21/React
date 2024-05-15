import {useState} from "react"
import Form from "./components/Form"
import Expenses from "./components/Expenses"

type Expense = {
  id: number
  category: string
  description: string
  price: number
}

const expensesData: Expense[] = [
  {id: 1, category: "Groceries", description: "Milk", price: 5},
  {id: 2, category: "Groceries", description: "Bread", price: 2.5},
  {id: 3, category: "Transportation", description: "Bus fare", price: 3},
  {id: 4, category: "Entertainment", description: "Movie ticket", price: 15},
  {id: 5, category: "Dining", description: "Lunch", price: 10},
  {id: 6, category: "Utilities", description: "Electricity bill", price: 50},
  {id: 7, category: "Shopping", description: "Clothes", price: 30},
  {id: 8, category: "Healthcare", description: "Medicine", price: 8},
  {id: 9, category: "Groceries", description: "Eggs", price: 4},
  {id: 10, category: "Entertainment", description: "Concert ticket", price: 40},
  {id: 11, category: "Dining", description: "Dinner", price: 20},
  {id: 12, category: "Transportation", description: "Taxi fare", price: 25},
  {id: 13, category: "Utilities", description: "Internet bill", price: 35},
  {id: 14, category: "Healthcare", description: "Doctor's visit", price: 50},
  {id: 15, category: "Shopping", description: "Electronics", price: 100},
  {id: 16, category: "Groceries", description: "Fruits", price: 7},
  {id: 17, category: "Dining", description: "Coffee", price: 3},
  {id: 18, category: "Entertainment", description: "Theater show", price: 25},
  {id: 19, category: "Transportation", description: "Train ticket", price: 20},
  {id: 20, category: "Shopping", description: "Shoes", price: 50},
]

const categoriesData = [...new Set(expensesData.map((expense) => expense.category))]
const categories = [...categoriesData] as const

function App() {
  const [expenses, setExpenses] = useState(expensesData)
  const deleteExpense = (id: number) => setExpenses(expenses.filter((expense) => expense.id !== id))

  return (
    <main className="container">
      <div>
        <Form
          categories={categories}
          addExpense={(expense) =>
            setExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses[expenses.length - 1].id + 1,
              },
            ])
          }
        />
      </div>
      <Expenses expensesData={expenses} deleteExpense={deleteExpense} />
    </main>
  )
}

export default App

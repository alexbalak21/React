import {useForm, FieldValues} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

// Define a schema using the Zod library to validate form data
const schema = z.object({
  name: z.string().min(4, {message: "Name must be at least 4 characters."}), // Ensure the name is a string with a minimum length of 4 characters
  age: z.number({invalid_type_error: "Age is required"}).min(1, {message: "Age must be at least 1."}), // Ensure the age is a number with a minimum value of 1
})

// Define a type alias for the form data based on the schema
type FormData = z.infer<typeof schema>

// Define a functional component called Form
function Form() {
  // Destructure the useForm hook to access form methods and state
  const {
    register, // Function to register form inputs
    handleSubmit, // Function to handle form submission
    formState: {errors, isValid}, // Object containing form validation errors and validation status
  } = useForm<FormData>({resolver: zodResolver(schema)}) // Initialize useForm with the schema for validation

  // Define a function to execute when the form is submitted
  const onSubmit = (data: FieldValues) => console.log(data) // Log form data to the console

  // Render the form JSX
  return (
    <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Input field for the name */}
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <div className="mb-3">
        {/* Input field for the name with registration and error handling */}
        <input className={errors.name ? "form-control is-invalid" : "form-control"} id="name" {...register("name")} />
        {/* Display validation error message if the name field has errors */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        {/* Input field for the age */}
        <label htmlFor="age">Age</label>
        {/* Input field for the age with registration, error handling, and conversion to number */}
        <input type="text" className={errors.age ? "form-control is-invalid" : "form-control"} id="age" {...register("age", {valueAsNumber: true})} />
        {/* Display validation error message if the age field has errors */}
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      {/* Submit button */}
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

// Export the Form component as the default export
export default Form

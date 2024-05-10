# React Form with Validation

This repository contains a simple React form component with validation using the `react-hook-form` library and schema-based validation with `zod`.

## Features

- Form input fields for name and age
- Validation rules for name (minimum length of 4 characters) and age (must be a number with a minimum value of 1)
- Error messages displayed for invalid inputs
- Form submission with console logging of form data

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

2. Navigate to the project directory: "app"

3. Install dependencies using "npm i"

4. Start the development server: "npm run dev"

5. Open your web browser and go to http://localhost:3000 to view the form.

## Dependencies

- `react`: JavaScript library for building user interfaces
- `react-dom`: React package for working with the DOM
- `react-hook-form`: Library for managing form state and validation in React
- `zod`: Library for schema-based validation
- `@hookform/resolvers`: Additional package for integrating Zod schema validation with `react-hook-form`

## Usage

You can use this form component in your React projects by importing it and rendering it within your application. Here's an example:

```jsx
import React from "react"
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <h1>React Form with Validation</h1>
      <Form />
    </div>
  )
}

export default App
```

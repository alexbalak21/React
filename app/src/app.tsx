import {useState} from "preact/hooks"
import Button from "./components/Button"

export function App() {
    const [counter, incrementCounter] = useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <Button onClick={() => incrementCounter(counter + 1)}>My Button</Button>
        </div>
    )
}

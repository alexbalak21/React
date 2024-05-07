import {useState} from "preact/hooks"
import Button from "./components/Button"
import Alert from "./components/Alert"

export function App() {
    const [alertVisible, setAlertVisible] = useState(false)

    return (
        <div>
            {alertVisible && <Alert closeAlert={() => setAlertVisible(false)}>My Alert</Alert>}
            <Button onClick={() => setAlertVisible(true)}>My Button</Button>
        </div>
    )
}

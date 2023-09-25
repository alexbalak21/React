import Alert from "./components/Alert"
import Button from "./components/Button"

function App() {
    return (
        <div>
            <Alert>
                <span>Learning REACT</span>
            </Alert>
            <Button
                onClick={() => console.log("Button Clicked")}
                // type="primary"
            >
                success
            </Button>
        </div>
    )
}

export default App

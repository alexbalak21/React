import Like from "./components/Like"

export function App() {
    return (
        <div>
            <Like onClick={() => console.log("Like")} />
        </div>
    )
}

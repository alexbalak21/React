import {useState} from "preact/hooks"
import {produce} from "immer"

export function App() {
    const [bugs, setBugs] = useState([
        {id: 1, title: "Bug 1", fixed: true},
        {id: 2, title: "Bug 2", fixed: false},
    ])

    const handleClick = () => {
        setBugs(
            produce((draft) => {
                const bug = draft.find((bug) => bug.id === 2)
                if (bug) bug.fixed = true
            })
        )
    }

    const handleDisplay = () => console.log(bugs)

    return (
        <div>
            {bugs.map((bug) => (
                <p key={bug.id}>
                    {bug.title} {bug.fixed ? "Fixed" : "Not Fixed"}
                </p>
            ))}
            <button onClick={handleClick}>Fix</button> <br />
            <button onClick={handleDisplay}>Display</button>
        </div>
    )
}

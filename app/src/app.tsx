import {useState} from "preact/hooks"

export function App() {
    let text = ""
    const [pizza, setPizza] = useState({
        name: "Margarita",
        toppings: ["Mushroom"],
    })
    const handleClick = () => {
        setPizza({name: pizza.name, toppings: [...pizza.toppings, text]})
    }

    return (
        <div>
            <ul>
                {pizza.toppings.map((value) => (
                    <li>{value}</li>
                ))}
            </ul>
            <input type="text" value={text} />
            <button onClick={handleClick}>Add Toping</button>
        </div>
    )
}

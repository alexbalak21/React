import {useState} from "preact/hooks"
import styles from "./ListGroup.module.css"
interface Props {
    cities: string[]
    heading: string
    onSelectCity: (city: string) => void
}

function ListGroup({cities, heading, onSelectCity}: Props) {
    const messageIfEmpty = cities.length === 0 && <p>No Item found</p>

    const [selectedCity, setSelectedCity] = useState(-1)
    return (
        <>
            <h1>{heading}</h1>
            {messageIfEmpty}
            <ul className={[styles.ListGroup, styles.red].join(" ")}>
                {cities.map((city, id) => (
                    <li
                        key={id}
                        onClick={() => {
                            setSelectedCity(id)
                            onSelectCity(city)
                        }}
                        className={selectedCity === id ? "list-group-item active" : "list-group-item"}>
                        {city}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup

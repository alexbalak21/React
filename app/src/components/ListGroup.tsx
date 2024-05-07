import {useState} from "preact/hooks"
interface Props {
    cities: string[]
    heading: string
}

function ListGroup({cities, heading}: Props) {
    const messageIfEmpty = cities.length === 0 && <p>No Item found</p>

    const [selectedCity, setSelectedCity] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>
            {messageIfEmpty}
            <ul className="list-group">
                {cities.map((city, id) => (
                    <li
                        key={id}
                        onClick={() => {
                            setSelectedCity(id)
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

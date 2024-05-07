import {useState} from "preact/hooks"

function ListGroup() {
    let cities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
        "London",
        "Paris",
        "Berlin",
        "Rome",
        "Madrid",
        "Tokyo",
        "Seoul",
        "Shanghai",
        "Beijing",
        "Mumbai",
        "São Paulo",
        "Buenos Aires",
        "Mexico City",
        "Toronto",
        "Sydney",
        "Melbourne",
        "Cape Town",
        "Johannesburg",
        "Nairobi",
        "Cairo",
    ]
    const messageIfEmpty = cities.length === 0 && <p>No Item found</p>

    const [selectedCity, setSelectedCity] = useState(-1)
    const handleClick = (event: MouseEvent) => console.log(event)

    return (
        <>
            <h1>List Group</h1>
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

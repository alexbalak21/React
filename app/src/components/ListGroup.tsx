function ListGroup() {
    const cities = [
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

    return (
        <>
            <ul className="list-group">
                {cities.map((city, id) => (
                    <li key={id} className={"list-group-item"}>
                        {city}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup

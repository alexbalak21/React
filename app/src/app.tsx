import ListGroup from "./components/ListGroup"

export function App() {
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
    const handleSelectCity = (city: string) => console.log(city)

    return (
        <div>
            <ListGroup cities={cities} onSelectCity={handleSelectCity} heading="Cities" />
        </div>
    )
}

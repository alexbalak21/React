import {useState} from "preact/hooks"

import ListGroup from "./components/ListGroup"

export function App() {
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
        "San Francisco",
        "Seattle",
        "Denver",
        "Boston",
        "Miami",
        "Atlanta",
        "London",
        "Paris",
        "Berlin",
        "Rome",
        "Madrid",
        "Lisbon",
        "Amsterdam",
        "Brussels",
        "Prague",
        "Vienna",
        "Tokyo",
        "Seoul",
        "Shanghai",
        "Beijing",
        "Bangkok",
        "Mumbai",
        "Sydney",
        "Melbourne",
        "Cape Town",
        "Johannesburg",
        "Cairo",
        "Buenos Aires",
        "São Paulo",
        "Mexico City",
        "Toronto",
        "Vancouver",
        "Montreal",
        "Auckland",
        "Dubai",
        "Moscow",
        "Istanbul",
        "Singapore",
        "Hong Kong",
    ]
    return (
        <div>
            <ListGroup heading="Cities" onSelectCity={(id) => console.log(id)} cities={cities}></ListGroup>
        </div>
    )
}

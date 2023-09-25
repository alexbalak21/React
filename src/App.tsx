import ListGroup from "./components/ListGroup"

function App() {
    const items = [
        "Mariehamn",
        "Tirana",
        "Andorra la Vella",
        "Vienna",
        "Minsk",
        "Brussels",
        "Sarajevo",
        "Sofia",
        "Zagreb",
        "Prague",
        "Copenhagen",
        "Tallinn",
        "Tórshavn",
        "Helsinki",
        "Paris",
        "Berlin",
        "Gibraltar",
        "Athens",
        "Saint Peter Port",
        "Budapest",
        "Reykjavík",
        "Dublin",
        "Douglas",
        "Rome",
        "Saint Helier",
        "Pristina",
        "Riga",
        "Vaduz",
        "Vilnius",
        "Luxembourg",
        "Valletta",
        "Chisinau",
        "Monaco",
        "Podgorica",
        "Amsterdam",
        "Skopje",
        "Oslo",
        "Warsaw",
        "Lisbon",
        "Bucharest",
        "Moscow",
        "San Marino",
        "Belgrade",
        "Bratislava",
        "Ljubljana",
        "Madrid",
        "Longyearbyen",
        "Stockholm",
        "Bern",
        "Kyiv",
        "London",
        "Vatican City",
    ]
    const handleSelectItem = (item: string) => console.log(item)

    return (
        <div>
            <ListGroup
                items={items}
                heading="Capitals"
                onSelectItem={handleSelectItem}
            ></ListGroup>
        </div>
    )
}

export default App

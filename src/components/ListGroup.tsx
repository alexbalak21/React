import ListItem from "./ListItem"

function ListGroup() {
    let selectedItem = 0
    let items = ['Mariehamn', 'Tirana', 'Andorra la Vella', 'Vienna', 'Minsk', 'Brussels', 'Sarajevo', 'Sofia', 'Zagreb', 'Prague', 'Copenhagen', 'Tallinn', 'Tórshavn', 'Helsinki', 'Paris', 'Berlin', 'Gibraltar', 'Athens', 'Saint Peter Port', 'Budapest', 'Reykjavík', 'Dublin', 'Douglas', 'Rome', 'Saint Helier', 'Pristina', 'Riga', 'Vaduz', 'Vilnius', 'Luxembourg', 'Valletta', 'Chisinau', 'Monaco', 'Podgorica', 'Amsterdam', 'Skopje', 'Oslo', 'Warsaw', 'Lisbon', 'Bucharest', 'Moscow', 'San Marino', 'Belgrade', 'Bratislava', 'Ljubljana', 'Madrid', 'Longyearbyen', 'Stockholm', 'Bern', 'Kyiv', 'London', 'Vatican City']
    return (<>
        <h1>List</h1>
        {items.length === 0 && <p>No Item Found.</p>}
        <ul className="list-group">
            {items.map((item, index) => ListItem(item, index))}
        </ul>
    </>)
}

export default ListGroup
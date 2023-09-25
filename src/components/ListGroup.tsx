import { useState } from "react"
import ListItem from "./ListItem"

interface Props {
    items: string[]
    heading: string
}

function ListGroup({ items, heading }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Item Found.</p>}
            <ul className="list-group">
                {items.map((name, index) =>
                    ListItem(name, index, selectedIndex, setSelectedIndex)
                )}
            </ul>
        </>
    )
}

export default ListGroup

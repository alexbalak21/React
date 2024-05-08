import {useState} from "preact/hooks"
import styles from "./ListGroup.module.css"
import styled from "styled-components"

const List = styled.ul`
    list-style: none;
    padding: 0;
    color: red;
`
interface ListItemProps {
    active: boolean
}

const ListItem = styled.li<ListItemProps>`
    padding: 6px;
    background: ${(props) => (props.active ? "grey" : "")};
`

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
            <List className={[styles.ListGroup, styles.red].join(" ")}>
                {cities.map((city, id) => (
                    <ListItem
                        active={id === selectedCity}
                        key={id}
                        onClick={() => {
                            setSelectedCity(id)
                            onSelectCity(city)
                        }}
                        className={selectedCity === id ? "list-group-item active" : "list-group-item"}>
                        {city}
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ListGroup

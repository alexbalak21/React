import { MouseEvent } from "react"

let selectedIndex = 0

function ListItem(name = "", key = 0) {
    const handleClick = (event: MouseEvent) => console.log(event)

    return (
        name && (
            <li
                key={key}
                className={
                    selectedIndex === key
                        ? "list-group-item text-center active"
                        : "list-group-item text-center"
                }
                onClick={handleClick}
            >
                {name}
            </li>
        )
    )
}

export default ListItem

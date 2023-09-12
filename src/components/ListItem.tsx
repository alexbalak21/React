function ListItem(name = "", key = 0) {
    return (
        name && (
            <li key={key} className="list-group-item">
                {name}
            </li>
        )
    )
}

export default ListItem

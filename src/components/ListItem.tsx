function ListItem(
    name = "",
    index = 0,
    selectedIndex: number,
    setSelectedIndex: Function
) {
    return (
        name && (
            <li
                key={index}
                className={
                    selectedIndex === index
                        ? "list-group-item text-center active"
                        : "list-group-item text-center"
                }
                onClick={() => setSelectedIndex(index)}
            >
                {name}
            </li>
        )
    )
}

export default ListItem

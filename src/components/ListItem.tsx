function ListItem(
    name = "",
    index = 0,
    selectedIndex: number,
    setSelectedIndex: Function,
    onSelectItem: Function
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
                onClick={() => {
                    setSelectedIndex(index)
                    onSelectItem(name)
                }}
            >
                {name}
            </li>
        )
    )
}

export default ListItem

function ListItem(name = "", key = 0) {

    return name && <li key={key} className={key === selectedItem ? 'list-group-item : active' : 'list-group-item'}>{name}</li>

}

export default ListItem
interface Props {
    children: string
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
    onClick: () => void
}

function Button({children, type = "primary", onClick}: Props) {
    return (
        <button onClick={onClick} className={"btn btn-" + type}>
            {children}
        </button>
    )
}

export default Button

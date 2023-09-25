import React from "react"

interface Props {
    children: string
    onClick: () => void
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info"
}

function Button({ children, onClick, type = "primary" }: Props) {
    return (
        <button className={"btn btn-" + type} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button

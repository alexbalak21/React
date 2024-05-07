interface Props {
    children: string
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
    close: () => void
}

const Alert = ({children, type = "primary"}: Props) => {
    return <div className={"alert alert-" + type}>{children}</div>
}

export default Alert

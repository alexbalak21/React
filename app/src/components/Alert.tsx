interface Props {
    children: string
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
    closeAlert: () => void
}

const Alert = ({children, type = "primary", closeAlert}: Props) => {
    return (
        <div className={"alert alert-dismissible alert-" + type}>
            {children}
            <button
                onClick={closeAlert}
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"></button>
        </div>
    )
}

export default Alert

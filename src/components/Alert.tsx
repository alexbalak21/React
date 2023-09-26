import { ReactNode } from "react"

interface Props {
    children: ReactNode
    onClose: () => void
}

function Alert({ children, onClose }: Props) {
    return (
        <div
            className="alert alert-warning alert-dismissible show"
            role="alert"
        >
            <strong>{children}</strong>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="close"
                onClick={onClose}
            ></button>
        </div>
    )
}

export default Alert

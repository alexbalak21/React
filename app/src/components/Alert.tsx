import {ReactNode} from "preact/compat"

interface Props {
    children: ReactNode
}

const Alert = ({children}: Props) => {
    return <div className={"alert alert-primary"}>{children}</div>
}

export default Alert

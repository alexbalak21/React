import {useState} from "react"
interface Props {
    children: string
    maxChars?: number
}

function ExpendableText({children, maxChars = 10}: Props) {
    const [showLess, setShowLess] = useState(true)
    if (children.length <= maxChars) return <p>{children}</p>
    const shortText = children.substring(0, maxChars)
    return (
        <div>
            <p>{showLess ? shortText + "..." : children}</p>
            <button onClick={() => setShowLess(!showLess)}>{showLess ? "Show More" : "Show Less"}</button>
        </div>
    )
}

export default ExpendableText

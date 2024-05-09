import {useState} from "preact/hooks"
import {FaRegHeart} from "react-icons/fa"
import {FaHeart} from "react-icons/fa"

interface Props {
    onClick: () => void
}

function Like({onClick}: Props) {
    const [liked, like] = useState(false)
    const toggle = () => {
        like(!liked)
        onClick()
    }
    const size = 20
    if (liked)q
        return (
            <i onClick={toggle}>
                <FaHeart color="red" size={size} />
            </i>
        )
    else
        return (
            <i onClick={toggle}>
                <FaRegHeart size={size} />
            </i>
        )
}

export default Like

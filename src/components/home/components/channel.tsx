import React, { MouseEventHandler, ReactEventHandler } from 'react'
import {FaVolumeUp} from "react-icons/fa"
interface Props{
    type: "voice" | "text";
    name: string,
    handleClick: MouseEventHandler,
}
export default function Channel({type, name, handleClick}:Props) {
    return (
        <div className={type==="voice"?"p-4 rounded-lg my-2 text-white cursor-pointer flex justify-start items-center hover:bg-nord-channel-hover/30 active:bg-nord-channel-selected bg-opacity-2 voice":"p-4 rounded-lg my-2 text-white cursor-pointer flex justify-start items-center hover:bg-nord-channel-hover/30 active:bg-nord-channel-selected bg-opacity-2"} onClick={handleClick}>
            {type=== "text"? <span className="text-2xl mx-2">#</span> : <FaVolumeUp className="text-2xl mx-2"/> }
            <span className="text-3xl">{name}</span>
        </div>
    )
}

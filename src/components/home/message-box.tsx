import React from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks";
interface Props{

}

export default function MessageBox({}: Props) {
    return (
        <div id="message-box" className="border border-1">
            {useAppSelector((state)=>!state.Root.socket?"long":"Man")}
        </div>
    )
}

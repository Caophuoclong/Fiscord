import React from 'react'
import Channel from './components/channel'
export default function ListChannel() {
    const handleChannelSelected = (event: any)=>{
        const element = event.currentTarget;
        const selected = document.querySelector(".bg-nord-channel-selected");
        selected?.classList.remove("bg-nord-channel-selected");
        selected?.classList.add("hover:bg-nord-channel-hover/30");
        console.log(element?.classList.contains("voice"));
        if(element?.classList.contains("voice")){
            element?.classList.add("hover:bg-nord-channel-hover/30")
        }else{
            element.classList.remove("hover:bg-nord-channel-hover/30")
            element.classList.add("bg-nord-channel-selected");
        }
    }
    const hanldeCreateChannel = (type: "text" | "voice")=>{
        console.log(type);
    }

    return (
        <div id="list-channel" className="flex flex-col bg-nord-dark">
            <div className="h-24 ">
                Day la header 1
            </div>
            <div id="channel" className="py-4 ">
                <div id="text-channel" className="px-2 my-4">
                    <div className="text-2xl flex justify-between mx-2">
                        <h1 className="text-2xl">Kenh chat</h1>
                        <button className="text-2xl hover:text-white" onClick={()=>{
                            hanldeCreateChannel("text");
                        }}>+</button>
                    </div>
                    <Channel handleClick={handleChannelSelected} type="text" name="Chat"/>

                </div>
                <div id="voice-channel" className="px-2 my-4">
                <div className="text-2xl flex justify-between mx-2">
                        <h1 className="text-2xl ">Voice chat</h1>
                        <button className="text-2xl hover:text-white" onClick={()=>{
                            hanldeCreateChannel("voice");
                        }}>+</button>
                    </div>
                    <Channel handleClick={handleChannelSelected} type="voice" name="Voice"/>
                </div>
            </div>
            <div id="me" className="mt-auto h-20 bg-nord-light dark:bg-nord-dark">
                xin chao
            </div>
        </div>
    )
}

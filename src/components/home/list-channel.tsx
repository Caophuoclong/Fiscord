import React from 'react'
import Channel from './components/channel';
import { FaMicrophone, FaHeadphones, FaCog } from 'react-icons/fa';
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
        <div id="list-channel" className="flex flex-col bg-nord-main-normal">
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
            <div id="me" className="mt-auto h-28 bg-nord-light dark:bg-nord-dark flex items-center px-8">
                <div className="relative before:content-[''] before:absolute before:bg-green-500 before:w-4 before:h-4 before:bottom-0 before:right-0 before:z-1 before:rounded-full">
                <img id="avatar" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad80879c-fb2b-498c-ba01-90055f5373c0/devl346-26818fa6-3c2f-4d5e-9fec-34b804c0edac.jpg/v1/fill/w_1600,h_1076,q_75,strp/the_covenant_spell_by_seven_teenth_devl346-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NiIsInBhdGgiOiJcL2ZcL2FkODA4NzljLWZiMmItNDk4Yy1iYTAxLTkwMDU1ZjUzNzNjMFwvZGV2bDM0Ni0yNjgxOGZhNi0zYzJmLTRkNWUtOWZlYy0zNGI4MDRjMGVkYWMuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xp3bnc8nGYd6-8JyOypqfTuL4sVf7bCOArBzJPd4Foo" alt="" className="h-16 w-16 rounded-full" />
                </div>
                <p id="info" className="text-xl text-white px-4 flex flex-col font-serif">
                    <span id="username" >Phuoc Long</span>
                    <span id="id">#1512</span>
                </p>
                <div className="tools mx-auto flex text-white gap-4 text-3xl">
                        <FaMicrophone  className="cursor-pointer"/>
                        <FaHeadphones className="cursor-pointer"/>
                        <FaCog className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

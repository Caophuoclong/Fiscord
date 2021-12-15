import React from 'react'
import { LeftSideStyle } from "../styles/left-side.styled";
import Server from './components/server';
interface Channel{
    id: string,
    title: string,
    image: string,
    unread?: boolean,
}
const channelFake: Array<Channel> = [
    {
        id: "1",
        title: "Home",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da0666d8-33c1-4544-bd67-3c8a9d74fd67/deuphup-78ddf670-ddec-44ae-bc24-4ba0b0e15c1f.jpg/v1/fill/w_1192,h_670,q_70,strp/56_andromedae__1920x1080_wallpaper__by_icfrac_deuphup-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2RhMDY2NmQ4LTMzYzEtNDU0NC1iZDY3LTNjOGE5ZDc0ZmQ2N1wvZGV1cGh1cC03OGRkZjY3MC1kZGVjLTQ0YWUtYmMyNC00YmEwYjBlMTVjMWYuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.w8I5z7Gb6rEsn4IOUI11qZjk3Sc3w7F1-i74wfd77So",
    },
    {
        id: "2",
        title: "ChannelMe",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bfb2d2e-b6c6-483f-8fa0-393695493762/devmo23-ce1bb756-d3cb-4a7a-9344-be81668bf4c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiZmIyZDJlLWI2YzYtNDgzZi04ZmEwLTM5MzY5NTQ5Mzc2MlwvZGV2bW8yMy1jZTFiYjc1Ni1kM2NiLTRhN2EtOTM0NC1iZTgxNjY4YmY0YzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xzGqM4vVhR__DwoFABYU9nFw0Wy36EEqqmJG1w_zTtQ",
        unread: true,
    },
    {
        id: "3",
        title: "Xin chao",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b05b3678-b771-412e-b8f2-1901fd5c8c43/d99awvb-bf2aaf62-a155-4ade-820f-710c2b651a79.jpg/v1/fill/w_813,h_983,q_70,strp/naruto_six_paths_sage_mode_by_jennyshiii_d99awvb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNyIsInBhdGgiOiJcL2ZcL2IwNWIzNjc4LWI3NzEtNDEyZS1iOGYyLTE5MDFmZDVjOGM0M1wvZDk5YXd2Yi1iZjJhYWY2Mi1hMTU1LTRhZGUtODIwZi03MTBjMmI2NTFhNzkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iHDjQq1MbwCzoA6h-P0WcVMO4PgUKQOZ8dH--TpCerU"
    }
]
export default function LeftSide() {
    const handleClick =(event: any) => {
        const selectedElement = document.querySelectorAll(".selected");
        selectedElement.forEach(value=>{
            value.classList.remove("selected");
        });
        event.currentTarget.classList.add("selected");
    }
    return (
        <LeftSideStyle className="dark:bg-nord-dark bg-nord-light shadow-xl">
            {channelFake.map((value, key)=>
                <Server key={key} id={value.id} handleClick={handleClick} index={key} title={value.title} url={value.image} unread={value.unread || false}/>

            )}
        </LeftSideStyle>
    )
}

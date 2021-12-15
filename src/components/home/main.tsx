import React from 'react'
import { MainStyled } from '../styles/main.styled'
import Header from "./header";
import MessageBox from "./message-box";
import ListChannel from "./list-channel"
import Toggle from "./components/toggleTheme";


export default function Main() {
    return (
        <MainStyled>
            
            <ListChannel/>
            <section>
            <Header/>
            <Toggle/>
            <MessageBox/>
            </section>
        </MainStyled>
    )
}

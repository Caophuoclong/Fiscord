import React from 'react'
import { MainStyled } from '../styles/main.styled'
import Header from "./header";
import MessageBox from "./message-box";
import ListChannel from "./list-channel"


export default function Main() {
    return (
        <MainStyled>
            <ListChannel/>
            <section>
            <Header/>
            <MessageBox/>
            </section>
        </MainStyled>
    )
}

import Styled from "styled-components";

export const MainStyled = Styled.main`
    min-width: 700px;
    width: 80%;
    background-color: gray;
    display: flex;
    &>section{
        width: calc(100% - 300px);
    }
    &>#list-channel{
        min-width: 300px
    }
`
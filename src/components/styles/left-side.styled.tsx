import styled from "styled-components";
export const LeftSideStyle = styled.aside`
    min-width: 80px !important;
    height: 100vh;
    .border-bottom{
        position: absolute;
        border: 1px solid gray;
        width: 60%;
        left: 50%;
        transform: translateX(-50%);
    }
    div:not(:first-child){
        margin: 2rem 0rem;
    }
    img{
        -webkit-transition: border-radius 100;
        transition: border-radius 100;
    }
    .selected{
        &>img{
            border-radius: 15px;
        }
        &:before{
            height: 4rem;
            visibility: visible;
        }
    }
`
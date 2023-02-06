import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E3F2FD;
    height: 100vh;

    @media only screen and (max-width: 868px) {
        padding: 20px;
    }
`
export const Container = styled.div`
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    width: 400px;
   

    h2{
        text-align: center;
        margin-bottom: 20px;
        color: #37474F;
        width: 100%;
    }
`

export const GoogleSingInContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    h3{
        background-color: transparent;
        color: #1E88E5;
        transition: all 0.2s ease-in-out;
        
        &:hover{
            transform: scale(1.01);
        }
    }
`

export const SpanLink = styled.span`
    color: #1E88E5;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 600;

    &:hover{
        transform: scale(1.01);
        border-bottom: 2px solid #1E88E5;
    }
`
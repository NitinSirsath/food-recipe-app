import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E3F2FD;
    height: 100vh;
`
export const Container = styled.div`
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    width: 400px;
    height: 300px;

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
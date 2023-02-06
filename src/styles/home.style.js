import styled from 'styled-components';

export const Wrapper = styled.div`
    
`

export const Heading = styled.h1`
    text-align: start;
    width: 100%;
    margin: 30px 0px;
    color: #455A64;
    padding: 0px 40px;

    @media screen and (max-width: 467px){
        margin: 10px 0px;
        padding: 0px 10px;
    }
`

export const RecipeCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 20px 40px;
    
    @media screen and (max-width: 1000px){
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    @media screen and (max-width: 467px){
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
    }
`

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const ModalContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    margin: 24px 40px;
`
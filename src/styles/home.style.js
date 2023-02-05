import styled from 'styled-components';

export const Wrapper = styled.div`
    
`

export const Heading = styled.h1`
    text-align: start;
    width: 100%;
    margin: 30px 0px;
    color: #455A64;
    padding: 0px 40px;
`

export const RecipeCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 20px 40px;
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
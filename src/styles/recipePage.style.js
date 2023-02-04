import styled from "styled-components";

export const RecipePageContainer = styled.div`
  display: flex;
  /* padding: 20px 50px; */
  height: 600px;
  flex-direction: column;
`;

export const BannerImageContainer = styled.div`
  flex: 0.7;
  
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.background});
    
`;
export const RecipeInfoContainer = styled.div`
  flex: 0.3;
margin: 20px auto;
  /* padding: 10px 250px; */
  display: flex;
  justify-content: center;
  width: 80%;
  

  h2{
    font-size: 29px;
    margin-bottom: 10px;
  }
`;


export const RecipeLeftSideContainer = styled.div`
    flex: 0.5;
    width: 59%;
    padding: 10px 30px;
    `
export const RecipeRightSideContainer = styled.div`
padding: 10px 30px;
/* padding: 10px 100px; */

flex: 0.5;

`

export const RecipeDesc = styled.p`
    /* width: 40%; */
    font-size: 17px;
  margin-bottom: 20px;
`

export const RecipeStepsContainer = styled.div`
    /* width: 40%; */

    p{
        margin-bottom: 10px;
        font-size: 17px;
    }
`
export const IngredientCard = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
border-radius: 10px;
/* padding: 10px 20px; */
    display: flex;
    flex-direction: column;

    h2{
        color: #fff;
        font-weight: 600;
    }
    `

export const IngredientListContainer = styled.div`
padding: 10px 20px;
flex: 0.7;

`

export const IngredientCardbg = styled.div`
    background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.background});
    flex: 0.3;
    padding: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    `
export const IngredientList = styled.ul`
    list-style: none;
    padding: 10px 20px;

    li{
        margin-bottom: 6px;
    }
`

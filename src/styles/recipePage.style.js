import styled from "styled-components";

export const RecipePageContainer = styled.div`
  display: flex;
  /* padding: 20px 50px; */
  height: 600px;
  flex-direction: column;
`;

export const LeftSideContainer = styled.div`
  flex: 0.6;
  
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.background});
    
`;
export const RightSideContainer = styled.div`
  flex: 0.4;
  padding: 10px 50px;
`;

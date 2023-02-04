import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import InreddientPattern from '../assets/ingredient_pattern.jpg'
import descPattern from '../assets/desc_pattern.jpg'
import stepPattern from '../assets/steps_pattern.jpg'
import {
  RecipePageContainer,
  BannerImageContainer,
  RecipeInfoContainer,
  RecipeDesc,
  RecipeStepsContainer,
  RecipeLeftSideContainer,
  RecipeRightSideContainer,
  Card,
  Cardbg,
  ListContainer,
  IngredientListContainer,
  LoaderContainer
} from "../styles/recipePage.style";
import { Typography } from "@mui/material";
import MaterialLoader from "../components/MaterialLoader";

const RecipePage = () => {
  const { loginUserState } = useContext(GlobalContext);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  const recipesCollectionRef = collection(db, "recipes");
 
  useEffect(() => {
    onSnapshot(recipesCollectionRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data(),
        };
      });
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    findRecipe();
  }, [recipes]);

  const findRecipe = () => {
    const recipe = recipes?.find((recipe) => recipe.id === id);
    setCurrentRecipe(recipe);
  };

  return (
    <RecipePageContainer>
      {loading? <LoaderContainer><MaterialLoader /></LoaderContainer> : <>
      <BannerImageContainer background={currentRecipe?.bg} />
      
      <RecipeInfoContainer>
       <RecipeLeftSideContainer>
      <Card>
      <Cardbg background={descPattern}>
       <h2>Description</h2>
       </Cardbg>
        <ListContainer>
            {currentRecipe?.desc}
        </ListContainer>
      </Card>
       <Card>
       <Cardbg background={stepPattern}>
       <h2>Steps to follow</h2>
       </Cardbg>
        <ListContainer>
            {currentRecipe?.steps?.map((step, index) => {
                const CapitalFirstLetter = step.charAt(0).toUpperCase() + step.slice(1)
                return (
                    <div key={index}> 
                        <p variant='h6'><span style={{fontWeight : 'bolder'}}>{index + 1}. </span>  {CapitalFirstLetter}</p>
                    </div>
                )
            })}
        </ListContainer>
       </Card>
       </RecipeLeftSideContainer>
       <RecipeRightSideContainer>
         <Card>
            <Cardbg background={InreddientPattern}>
         <h2>Ingredients</h2>
                
            </Cardbg>
            <IngredientListContainer>

            <ListContainer>
                {currentRecipe?.ingredients?.map((ingredient, index) => {
                    const CapitalFirstLetter = ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
                    return (
                        <li key={index}>
                            <span variant='h6'><span style={{fontWeight : 'bolder'}}>{index + 1}. </span> {CapitalFirstLetter}</span>
                        </li>
                    )
                })}
                </ListContainer>
            </IngredientListContainer>
         </Card>
       </RecipeRightSideContainer>
      </RecipeInfoContainer>
      </>}
    </RecipePageContainer>
  );
};

export default RecipePage;

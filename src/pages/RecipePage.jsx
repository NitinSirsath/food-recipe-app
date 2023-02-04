import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import FoodPattern from '../assets/ingredient_pattern.jpg'
import {
  RecipePageContainer,
  BannerImageContainer,
  RecipeInfoContainer,
  RecipeDesc,
  RecipeStepsContainer,
  RecipeLeftSideContainer,
  RecipeRightSideContainer,
  IngredientCard,
  IngredientCardbg,
  IngredientList,
  IngredientListContainer
} from "../styles/recipePage.style";
import { Typography } from "@mui/material";

const RecipePage = () => {
  const { loginUserState } = useContext(GlobalContext);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [recipes, setRecipes] = useState([]);
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
      <BannerImageContainer background={currentRecipe?.bg} />
      
      <RecipeInfoContainer>
       <RecipeLeftSideContainer>
       <h2>Description</h2>
        <RecipeDesc>
            {currentRecipe?.desc}
        </RecipeDesc>
        <h2>Steps to follow</h2>
        <RecipeStepsContainer>
            {currentRecipe?.steps?.map((step, index) => {
                return (
                    <div key={index}>
                        
                        <p variant='h6'>{index + 1}.  {step}</p>
                    </div>
                )
            })}
        </RecipeStepsContainer>
       </RecipeLeftSideContainer>
       <RecipeRightSideContainer>
         <IngredientCard>
            <IngredientCardbg background={FoodPattern}>
         <h2>Ingredients</h2>
                
            </IngredientCardbg>
            <IngredientListContainer>

            <IngredientList>
                {currentRecipe?.ingredients?.map((ingredient, index) => {
                    return (
                        <li key={index}>
                            <span variant='h6'>{ingredient}</span>
                        </li>
                    )
                })}
                </IngredientList>
            </IngredientListContainer>
         </IngredientCard>
       </RecipeRightSideContainer>
      </RecipeInfoContainer>
    </RecipePageContainer>
  );
};

export default RecipePage;

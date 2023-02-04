import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import {
  RecipePageContainer,
  LeftSideContainer,
  RightSideContainer,
} from "../styles/recipePage.style";

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
      <LeftSideContainer background={currentRecipe?.bg}>
      </LeftSideContainer>
      <RightSideContainer>
        <h1>{currentRecipe?.title}</h1>
      </RightSideContainer>
    </RecipePageContainer>
  );
};

export default RecipePage;

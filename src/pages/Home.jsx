import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";
import RecipeCard from "../components/RecipeCard";
import MaterialLoader from "../components/MaterialLoader";
import RecipeModal from "../components/RecipeModal";
import { deleteDoc, doc } from "firebase/firestore";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Wrapper,
  Heading,
  RecipeCardWrapper,
  LoaderContainer,
  ModalContainer,
} from "../styles/home.style";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const recipesCollectionRef = collection(db, "recipes");
  const [search, setSearch] = useState("");

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

  const removeRecipe = (id) => {
    deleteDoc(doc(db, "recipes", id));
  };

  // const handleView = (id) => {
  //     const newRecipes = recipes.map(recipe => {
  //         if(recipe.id === id){
  //             return {
  //                 ...recipe,
  //                 viewing: !recipe.viewing
  //             }
  //         }
  //         return recipe
  //     })
  //     setRecipes(newRecipes)
  // }

  return (
    <Wrapper>
      {loading ? (
        <LoaderContainer>
          <MaterialLoader />
        </LoaderContainer>
      ) : (
        <>
          {/* <Heading>Welcome to recipe WebApp</Heading> */}
          <ModalContainer>
            <RecipeModal recipesCollectionRef={recipesCollectionRef} />
          </ModalContainer>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        margin: '10px 40px',
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Search Recipe" variant="standard" onChange={(e) => setSearch(e.target.value)} />
    </Box>
          <RecipeCardWrapper>
            {recipes
              ?.filter((searchRecipe) => {
                if (search === "") {
                  return searchRecipe;
                } else if (
                  searchRecipe.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return searchRecipe;
                }

                return (
                  searchRecipe.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  searchRecipe.description
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
                );
              })
              .map((recipe) => {
                return (
                  <RecipeCard
                    removeRecipe={removeRecipe}
                    key={recipe.id}
                    recipe={recipe}
                  />
                );
              })}
          </RecipeCardWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Home;

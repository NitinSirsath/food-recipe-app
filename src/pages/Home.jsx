import React,{useState,useEffect,useContext} from 'react'
import { GlobalContext } from '../context/globalContext'
import { db } from '../firebase.config'
import {collection,onSnapshot} from 'firebase/firestore'
import Navbar from '../components/Navbar'
import { Typography } from '@mui/material'
import RecipeCard from '../components/RecipeCard'
import MaterialLoader from '../components/MaterialLoader'
import RecipeModal from '../components/RecipeModal'
import {deleteDoc,doc} from 'firebase/firestore'
import {Wrapper, Heading,RecipeCardWrapper,LoaderContainer,ModalContainer} from '../styles/home.style'


const Home = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const recipesCollectionRef = collection(db, 'recipes')
    
    useEffect(() => {
        onSnapshot(recipesCollectionRef, (snapshot) => {
            const data = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            })
            setRecipes(data)
            setLoading(false)
        }) 
        
    }, [])

    const removeRecipe = id => {
        deleteDoc(doc(db, "recipes", id))
      }

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
        {loading ? <LoaderContainer><MaterialLoader /></LoaderContainer> : <>
        {/* <Heading>Welcome to recipe WebApp</Heading> */}
        <ModalContainer>
        <RecipeModal recipesCollectionRef ={recipesCollectionRef }/>
        </ModalContainer>
        <RecipeCardWrapper>
            {recipes?.map(recipe => {
                return <RecipeCard removeRecipe={removeRecipe} key={recipe.id} recipe={recipe}/>
            })}
        </RecipeCardWrapper>
        </>}
        
    </Wrapper>
  )
}

export default Home
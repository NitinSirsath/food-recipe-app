import React,{useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/globalContext'
import { RecipePageContainer } from '../styles/recipePage.style'
import { useParams } from 'react-router-dom';
import { db } from '../firebase.config'
import {collection,onSnapshot} from 'firebase/firestore'

const RecipePage = () => {
    const {loginUserState} = useContext(GlobalContext)
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [recipes, setRecipes] = useState([])
    let { id } = useParams();
    
    const recipesCollectionRef = collection(db, 'recipes')
    console.log(loginUserState, 'loginUserState')
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
            
        }) 
        
    }, [])

    useEffect(() => {
        findRecipe()
    }, [recipes])

    const findRecipe = () => {
        const recipe = recipes?.find(recipe => recipe.id === id)
        setCurrentRecipe(recipe)
    }
    console.log(currentRecipe, 'currentRecipe')

  return (
    <RecipePageContainer>
        <h1>Recipe Page</h1>
    </RecipePageContainer>
  )
}

export default RecipePage
import React,{useState,useEffect,useContext} from 'react'
import { GlobalContext } from '../context/globalContext'
import { db } from '../firebase.config'
import {collection,onSnapshot} from 'firebase/firestore'
import Navbar from '../components/Navbar'
import { Typography } from '@mui/material'
import RecipeCard from '../components/RecipeCard'
import {Wrapper, Heading,RecipeCardWrapper} from '../styles/home.style'


const Home = () => {
    const {loginUserState, setLoginUserState,recipes, setRecipes} = useContext(GlobalContext)

    
    const [form, setForm] = useState({
        title:'',
        desc:'',
        images:[],
        ingredients:[],
        steps:[]
    })
    const [popupActive, setPopupActive] = useState(false)
    const [loading, setLoading] = useState(true)
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
            setLoading(false)
        }) 
        
    }, [])

    const handleView = (id) => {
        const newRecipes = recipes.map(recipe => {
            if(recipe.id === id){
                return {
                    ...recipe,
                    viewing: !recipe.viewing
                }
            }
            return recipe
        })
        setRecipes(newRecipes)
    }

    console.log(recipes, 'recipes')

  return (
    <Wrapper>
        
        <Heading>Welcome to recipe WebApp</Heading>
      
        <RecipeCardWrapper>
            {recipes?.map(recipe => {
                return <RecipeCard recipe={recipe}/>
            })}
        </RecipeCardWrapper>
    </Wrapper>
  )
}

export default Home
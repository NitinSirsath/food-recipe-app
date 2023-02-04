import React,{useState,useEffect,useContext} from 'react'
import { GlobalContext } from '../context/globalContext'
import { db } from '../firebase.config'
import {collection,onSnapshot} from 'firebase/firestore'


const Home = () => {
    const {loginUserState, setLoginUserState ,handleLogout} = useContext(GlobalContext)

    const [recipes, setRecipes] = useState([])
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

    useEffect(() => {
        onSnapshot(recipesCollectionRef, (snapshot) => {
            const data = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setRecipes(data)
            setLoading(false)
        }) 
        
    }, [])

    console.log(recipes, 'recipes')

  return (
    <div>
        welcome to home
        <button onClick={() =>handleLogout()}>logout</button>
        <div>

        </div>
    </div>
  )
}

export default Home
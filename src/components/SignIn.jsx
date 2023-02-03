import React, { useEffect, useContext,useState } from 'react'
import {auth, googleProvider} from '../firebase.config'
import { signInWithPopup } from 'firebase/auth'
import { GlobalContext } from '../context/globalContext'

const SignIn = () => {
   
    const {loginUserState, setLoginUserState} = useContext(GlobalContext)

    // const [loginUserState, setLoginUserState] = useState('')
    
    const handleClick = () => {
       signInWithPopup(auth, googleProvider).then((data) =>{
        setLoginUserState(data.user.email)
           localStorage.setItem('user', data.user.email)
       })
    }

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user){
            setLoginUserState(user)
        }
    }, [])

  return (
    <div>
        SignIn
        {loginUserState ? <h1>{loginUserState}</h1> : <button onClick={handleClick}>Sign In</button>}
    </div>
  )
}

export default SignIn
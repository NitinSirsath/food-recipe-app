import React, { useEffect, useState } from 'react'
import {auth, googleProvider} from '../firebase.config'
import { signInWithPopup } from 'firebase/auth'

const SignIn = () => {
    const [user, setUser] = useState('')

    const handleClick = () => {
       signInWithPopup(auth, googleProvider).then((data) =>{
           setUser(data.user.email)
           localStorage.setItem('user', data.user.email)
       })
    }

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user){
            setUser(user)
        }
    }, [])

  return (
    <div>
        SignIn
        {user ? <h1>{user}</h1> : <button onClick={handleClick}>Sign In</button>}
    </div>
  )
}

export default SignIn
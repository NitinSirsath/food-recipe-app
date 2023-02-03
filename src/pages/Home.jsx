import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalContext'

const Home = () => {
    const {loginUserState, setLoginUserState ,handleLogout} = useContext(GlobalContext)

  return (
    <div>
        welcome to home
        <button onClick={() =>handleLogout()}>logout</button>
    </div>
  )
}

export default Home
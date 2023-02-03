import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignIn from './components/SignIn'
import { GlobalContext } from './context/globalContext'

function App() {
  const [count, setCount] = useState(0)
  const {name} = useContext(GlobalContext)
    console.log(name, 'user')
  return (
    <div className="App">
     <h1>singup</h1>
     <SignIn />
    </div>
  )
}

export default App

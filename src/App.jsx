import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>singup</h1>
     <SignIn />
    </div>
  )
}

export default App

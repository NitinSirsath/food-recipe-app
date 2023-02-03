import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignIn from './pages/SignIn'
import { GlobalContext } from './context/globalContext'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'

function App() {

  const {loginUserState, setLoginUserState} = useContext(GlobalContext)

  const ProtectedRoute = ({ children }) => {
    if (!loginUserState) {
      return <Navigate to="/signin" />;
    }

    return children
  };


  return (

    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="signin" element={<SignIn />} />
       
      </Route>
    </Routes>
  
  // <SignIn />
  )
}

export default App

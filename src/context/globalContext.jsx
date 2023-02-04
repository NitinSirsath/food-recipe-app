import React,{ createContext, useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";

export const GlobalContext = React.createContext();


export const GlobalProvider = ({ children }) => {
  const [loginUserState, setLoginUserState] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();



  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user){
        setLoginUserState(user)
    }

    if(loginUserState){
      navigate('/')
    }

  }, [loginUserState]);

  const handleLogout = () => {
    localStorage.removeItem('user')
    setLoginUserState('')
}

  return (
    <GlobalContext.Provider value={{ loginUserState, setLoginUserState,handleLogout, loading, setLoading, name:'hello' }}>
      {children}
    </GlobalContext.Provider>
  );
}
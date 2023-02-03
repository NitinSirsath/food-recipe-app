import React,{ createContext, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [loginUserState, setLoginUserState] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{ loginUserState, setLoginUserState, loading, setLoading, name:'hello' }}>
      {children}
    </GlobalContext.Provider>
  );
}
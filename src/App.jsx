import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SignIn from "./pages/SignIn";
import { GlobalContext } from "./context/globalContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import RecipePage from "./pages/RecipePage";

function App() {
  const { loginUserState, setLoginUserState } = useContext(GlobalContext);

  const ProtectedRoute = ({ children }) => {
    if (!loginUserState) {
      return <Navigate to="/signin" />;
    }

    return children;
  };

  return (
    <>
      {loginUserState && <Navbar />}
      <Routes>
        <Route path="/"
         
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <ProtectedRoute>
                <RecipePage />
              </ProtectedRoute>
            }
          />
          <Route path="signin" element={<SignIn />} />
      
      </Routes>
    </>

    // <SignIn />
  );
}

export default App;

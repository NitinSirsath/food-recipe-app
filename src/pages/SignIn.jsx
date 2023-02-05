import React, { useEffect, useContext, useState } from "react";
import { auth, googleProvider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { GlobalContext } from "../context/globalContext";
import GoogleIcon from "@mui/icons-material/Google";
import { blue } from "@mui/material/colors";
import { useNavigate, Link } from "react-router-dom";

import {
  Wrapper,
  Container,
  GoogleSingInContainer,
  SpanLink
} from "../styles/signIn.style";
import SignUp from "../components/SignUp";
import UserLogin from "../components/UserLogin";
import { Typography } from "@mui/material";

const SignIn = () => {
  const { loginUserState, setLoginUserState, handleLogout } =
    useContext(GlobalContext);
  const [err, setErr] = useState(false);
  const [showNewLogin, setShowNewLogin] = useState(false);

  const handleClick = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        setLoginUserState(data.user.email);
        localStorage.setItem("user", data.user.email);
      })

      .catch((err) => {
        setErr(true);
      });
  };

  const handleSwitch = () => {
    setShowNewLogin(!showNewLogin);
  }

  console.log(showNewLogin, 'showNewLogin')

  return (
    <Wrapper>
      <Container>
        <h2>Sing In</h2>
        {err && <span>Something went wrong</span>}
        <GoogleSingInContainer onClick={handleClick}>
          <GoogleIcon sx={{ fontSize: 40, color: blue[500] }} />
          <h3>Sign In With Google</h3>
        </GoogleSingInContainer>
        <h3 style={{textAlign: 'center'}}>Or</h3>
        <div>{showNewLogin ? <SignUp /> : <UserLogin />}</div>

        <Typography sx={{textAlign: 'center', marginTop:'10px'}} onClick={() => handleSwitch()}> {!showNewLogin? "Don't have an Account get?": 'Already have an account get?'} <SpanLink >{showNewLogin? 'Sign In': 'SignUp'}</SpanLink></Typography>
      </Container>
    </Wrapper>
  );
};

export default SignIn;

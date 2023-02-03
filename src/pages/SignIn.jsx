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
} from "../styles/signIn.style";

const SignIn = () => {
  const { loginUserState, setLoginUserState, handleLogout } =
    useContext(GlobalContext);
  const [err, setErr] = useState(false);

  const handleClick = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setLoginUserState(data.user.email);
      localStorage.setItem("user", data.user.email);
    })

    .catch((err) => {
      setErr(true);
    });
  }

  return (
    <Wrapper>
      <Container>
        <h2>Sing In</h2>
        {err && <span>Something went wrong</span>}
        <GoogleSingInContainer onClick={handleClick}>
          <GoogleIcon sx={{ fontSize: 40, color: blue[500] }} />
          <h3>Sign In With Google</h3>
        </GoogleSingInContainer>
      </Container>
    </Wrapper>
  );
};

export default SignIn;

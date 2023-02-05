import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import Button from '@mui/material/Button';
import {GlobalContext} from '../context/globalContext'


const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
    margin-top: 17px;
`


const SignUp = () => {

  const {loginUserState, setLoginUserState} = useContext(GlobalContext)

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [comfirmPass, setConfirmPass] = useState("");

  const handleAuthenticationForm = (e) => {
    e.preventDefault();
        if(pass === comfirmPass){
          createUserWithEmailAndPassword(auth, email, pass)
        .then((data) => {
          setLoginUserState(data.user.email);
        localStorage.setItem("user", data.user.email);
        // Signed in
        // const user = userCredential.user;
        console.log(data, 'userCredential')

        })
        .catch((error) => {
        // const errorCode = error.code;
        console.log(error, 'error')
        });
        } else {
          alert('Password does not match')
        }
    }
  return (
    
      <FormStyle action="" onSubmit={handleAuthenticationForm}>
        <TextField
         
          value={email}
          label="Email"
          variant="outlined"
          type="email"
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
         
          value={pass}
          type="password"
          label="Password"
          onChange={(e) => setPass(e.target.value)}
          variant="outlined"
          size="small"
        />
        <TextField
         
          value={comfirmPass}
          type="password"
          label="Confirm Password"
          onChange={(e) => setConfirmPass(e.target.value)}
          variant="outlined"
          size="small"
        />
        <Button type="submit" sx={{width: '62%'}} variant="contained">Sign Up</Button>
      </FormStyle>
  
  );
};

export default SignUp;

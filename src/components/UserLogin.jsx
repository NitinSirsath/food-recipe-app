import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
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

const UserLogin = () => {

    const {loginUserState, setLoginUserState} = useContext(GlobalContext)

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

    const handleAuthenticationForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
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
        <Button type='submit' variant='contained' sx={{width: '62%'}} color='primary'>Login</Button>
      </FormStyle>
  );
};

export default UserLogin;

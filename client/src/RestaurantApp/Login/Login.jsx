import { useState } from "react";
import Axios from "axios";
import {
  InputLabel,
  LoginBox,
  LoginInput,
  MainContainer,
  SubmitBtn,
  SubmitText,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentToken = localStorage.getItem("tolkien") ?? null;

  const headers = {
    "Content-type": "application/json",
  };

  if (currentToken) {
    headers.Authorization = `Bearer ${currentToken}`;
  }


  const checkCredentials = () => {
    Axios.post(
      "http://localhost:3001/login",
      {
        email,
        password,
      },
      {
        headers,
      }
    )
      .then((res) => {
        localStorage.setItem("tolkien", res.data.token);
        console.log(res);
      })
      .then((err) => {
        console.error(err);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <MainContainer>
      <LoginBox>
        <InputLabel>Email</InputLabel>
        <LoginInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputLabel>Password</InputLabel>
        <LoginInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitBtn onClick={checkCredentials}>
          <SubmitText>Login</SubmitText>
        </SubmitBtn>
      </LoginBox>
    </MainContainer>
  );
};

export default Login;

import React, { useState } from 'react';
import { LoginFail } from './LoginFail.js';
import styled from '@emotion/styled';

const Loginbase = styled.div`
position: fixed;
  inset: 0;
  background-color: rgba(100, 100, 100, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loginWindow = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
background-color: white;
border: 3px solid black;
border-radius: 20px;
`;

const inputDiv = styled.div`
  border: 5px solid black;
`;
const inputField = styled.input`
border: 0px;
`;

export function Login({ setLoginScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [onButtonPressLoginFail, setOnButtonPressLoginFail] = useState(false);
  return (
    <Loginbase>
      <loginWindow>
        <inputDiv>
          Email:
          <inputField
            onChange={(event) => setEmail(event.target.value)}
          ></inputField>
        </inputDiv>
        <div>
          Password:
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            email !== '' && password !== ''
              ? setLoginScreen(false)
              : console.log('Email or password missing!'); //setOnButtonPressLoginFail(false);
          }}
        >
          Log in
        </button>
      </loginWindow>
    </Loginbase>
  );
}

import React, { useState } from 'react';
import { LoginFail } from './LoginFail.js';

export function Login({ setLoginScreen }) {
  const [loginOk, setLoginOk] = useState(false);
  const [pwOk, setPwOk] = useState(false);
  //const [onButtonPressLoginFail, setOnButtonPressLoginFail] = useState(false);
  return (
    <div className="Loginbase">
      <div className="Loginwindow">
        <div>
          Email:
          <input
            onChange={(event) => {
              event.target.value === null
                ? setLoginOk(false)
                : setLoginOk(true);
            }}
          ></input>
        </div>
        <div>
          Password:
          <input
            onChange={(event) => {
              event.target.value === null ? setPwOk(false) : setPwOk(true);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            loginOk && pwOk
              ? setLoginScreen(false)
              : console.log("Email or password missing!")//setOnButtonPressLoginFail(false);
          }}
        >
          Log in
        </button>
        
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { LoginFail } from './LoginFail.js';

export function Login({ setLoginScreen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [onButtonPressLoginFail, setOnButtonPressLoginFail] = useState(false);
  return (
    <div className="Loginbase">
      <div className="Loginwindow">
        <div>
          Email:
          <input
            onChange={(event) => 
              setEmail(event.target.value)
            }
          ></input>
        </div>
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
            email!=="" && password!==""
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

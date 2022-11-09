import React from 'react';

export function LoginFail(onButtonPressLoginFail) {
  console.log(onButtonPressLoginFail);
  if (onButtonPressLoginFail) {
    return <div>Email or password is missing!</div>;
  } else {
    return <div> asd</div>;
  }
}

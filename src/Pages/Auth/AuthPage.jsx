import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import classes from "./AuthPage.module.css"; // Import CSS module

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className={classes.container}>
      <div className={classes.authSwitcher}>
        <button
          className={`${classes.switchButton} ${
            isSignIn ? classes.active : ""
          }`}
          onClick={() => setIsSignIn(true)}
        >
          Sign In
        </button>
        <button
          className={`${classes.switchButton} ${
            !isSignIn ? classes.active : ""
          }`}
          onClick={() => setIsSignIn(false)}
        >
          Sign Up
        </button>
      </div>
      {isSignIn ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default AuthPage;

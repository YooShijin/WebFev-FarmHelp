import React, { useState } from "react";
import classes from "./Auth.module.css"; // Import CSS module

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log("Sign In", { email, password });
  };

  return (
    <div className={classes.authForm}>
      <h2 className={classes.title}>Sign In</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password" className={classes.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.button}>
          Sign In
        </button>
        <p className={classes.switchText}>
          Don't have an account?{" "}
          <a href="#signup" className={classes.switchLink}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

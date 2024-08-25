import React, { useState } from "react";
import classes from "./Auth.module.css"; // Import CSS module

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your sign-up logic here
    console.log("Sign Up", { email, password });
  };

  return (
    <div className={classes.authForm}>
      <h2 className={classes.title}>Sign Up</h2>
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
        <div className={classes.formGroup}>
          <label htmlFor="confirmPassword" className={classes.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.button}>
          Sign Up
        </button>
        <p className={classes.switchText}>
          Already have an account?{" "}
          <a href="#signin" className={classes.switchLink}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

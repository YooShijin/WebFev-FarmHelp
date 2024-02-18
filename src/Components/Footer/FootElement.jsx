import classes from "./FootElement.module.css";

const FootElement = () => {
  return (
    <>
      <footer className={classes["footer"]}>
        <img src="assets/logo.png" className="logo"></img>
        <p className={classes["footer-p"]}>
          &copy; Copyright Farm-Help 2024, All rights reserved!
        </p>
      </footer>
    </>
  );
};

export default FootElement;

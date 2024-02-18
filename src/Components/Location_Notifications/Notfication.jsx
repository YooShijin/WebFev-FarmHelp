import { Link } from "react-router-dom";
import classes from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={classes["notification-bg"]}>
      <div className={classes["notification-container"]}>
        <h1 className={classes["notification-h1"]}>
          Get Disease Spread Notifications Today
        </h1>
        <p className={classes["notification-p"]}>
          Sign up to receive notifications about disease spread in your area.
        </p>
        <div className={classes["button-holder"]}>
          <Link to="/error">
            <button className={classes["buttons"]}>Sign Up</button>
          </Link>
          <Link to="/error">
            <button className={classes["buttons"]}>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;

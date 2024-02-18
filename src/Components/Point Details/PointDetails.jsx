import classes from "./PointDetails.module.css";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

const PointDetails = () => {
  return (
    <div className={classes["points-container"]}>
      <div className={classes["points-text-container"]}>
        <h1 className={classes["points-text-h1"]}>
          Earn Points and Share Your Knowledge with the Farmer Profile System
        </h1>
        <p className={classes["points-text-p"]}>
          With our Farmer Profile System, you can earn points by sharing
          valuable information about your crops. The more you contribute, the
          more points you'll accumulate.
        </p>
        <div className={classes["points-subtext-container"]}>
          <div className={classes["points-subtext-vertical"]}>
            <AiFillCodeSandboxCircle className={classes["bullet-symbol"]} />
            <h4 className={classes["points-text-h4"]}>Benefits</h4>
            <p className={classes["points-text-p2"]}>
              1. Gain recognition within the farming community for your
              expertise and contributions.
            </p>
          </div>
          <div className={classes["points-subtext-vertical"]}>
            <AiFillCodeSandboxCircle className={classes["bullet-symbol"]} />
            <h4 className={classes["points-text-h4"]}>Community</h4>
            <p className={classes["points-text-p2"]}>
              2. Help other farmers by sharing your knowledge and experiences.
            </p>
          </div>
        </div>
      </div>
      <img src="assets/agriculture-large.png" className={classes.image}></img>
    </div>
  );
};

export default PointDetails;

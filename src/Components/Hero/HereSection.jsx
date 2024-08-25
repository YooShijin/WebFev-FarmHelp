import classes from "./HeroSection.module.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className={classes["hero-section-container"]}>
      {/* <img
        src="src\assets\farm-background.avif"
        alt="An image of farmers working on field"
        className={classes["farm-background"]}
      ></img> */}
      <div className={classes["content-box"]}>
        <h1 className={classes["hero-heading"]}>CROP DISEASE DETECTION</h1>
        <p className={classes["hero-p"]}>
          Detect diseases in your crops with our advanced technology. Increase
          your yield and protect your investment.
        </p>
        <div className={classes["button-holder"]}>
          <Link to="/auth">
            <button
              className={classes["buttons"]}
              style={{
                backgroundColor: "rgba(41, 35, 35, 0.726)",
                color: "white",
                border: "none",
              }}
            >
              Try Now
            </button>
          </Link>
          <Link to="/error">
            <button className={classes["buttons"]}>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

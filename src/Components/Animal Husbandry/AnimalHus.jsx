import { Link } from "react-router-dom";
import classes from "./AnimalHus.module.css";

const AnimalHus = () => {
  return (
    <div style={{ padding: "50px 25px", backgroundColor: "#F1EFEB" }}>
      <div className={classes["animal-hus-container"]}>
        <div className={classes["animal-hus-text-container"]}>
          <h1 className={classes["animal-hus-h1"]}>
            Animal Husbandry: Enhancing Farming Practices for Farmers
          </h1>
          <p className={classes["animal-hus-p"]}>
            Learn about the importance of Animal Husbandry and how it can
            benefit farmers in their agricultural endeavors.
          </p>
          <div className={classes["animal-hus-subtext-container"]}>
            <div>
              <h4 className={classes["animal-hus-h4"]}>
                Why Choose Animal Husbandry?
              </h4>
              <p className={classes["animal-hus-p2"]}>
                Improve crop yield and livestock health with effective Animal
                Husbandry practices.
              </p>
            </div>
            <div>
              <h4 className={classes["animal-hus-h4"]}>Join Now</h4>
              <p className={classes["animal-hus-p2"]}>
                Become a part of our community and gain access to valuable
                farming resources.
              </p>
            </div>
          </div>
          <div className={classes["button-holder"]}>
            <Link to="/error">
              <button className={classes["buttons"]}>Learn More</button>
            </Link>
            <Link to="/error">
              <button className={classes["buttons"]}>Sign Up</button>
            </Link>
          </div>
        </div>
        <img src="assets/animal-hus.jpg" className={classes.image}></img>
      </div>
    </div>
  );
};

export default AnimalHus;

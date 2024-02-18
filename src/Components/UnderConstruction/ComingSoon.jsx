import classes from "./ComingSoon.module.css"
const ComingSoon = () => {
  return (
    <div className={classes["container"]}>
      <img src="https://react-coming-soon.maksv.me/under-development.png" className={classes.image}></img>
      <h1 className={classes.h1}>Page Under Construction!</h1>
      <p></p>
    </div>
  );
};
export default ComingSoon;

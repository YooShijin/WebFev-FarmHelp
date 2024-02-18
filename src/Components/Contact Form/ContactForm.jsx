// import classes from "./ContactForm.module.css";
import "./ContactForm.css";
const ContactForm = () => {
  const onClickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={"form-container"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1>Contact Farm Help</h1>
        <p>Have questions or need assistance? Reach out to us!</p>
      </div>
      <div className="form-sub-container">
        <form action="action_page.php">
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          ></input>
          <label htmlFor="lname">Email</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your email address.."
          ></input>
          <label htmlFor="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Enter you message here..."
            style={{ height: "200px" }}
          ></textarea>
          <div>
          <input
            type="checkbox"
            id="terms"
            name="accept_terms"
            style={{marginRight: "4px"}}
          ></input>
          <label htmlFor="html">I agree to terms</label></div>
          <br></br>

          <input type="submit" value="Submit" onClick={onClickHandler}></input>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;

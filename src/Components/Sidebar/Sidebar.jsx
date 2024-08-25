import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
      <button className={classes.closeBtn} onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <ul className={classes.sidebarList}>
        <li>
          <Link to="/home" onClick={toggleSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/detector" onClick={toggleSidebar}>
            Detector
          </Link>
        </li>
        <li>
          <Link to="/error/animal-husbandry" onClick={toggleSidebar}>
            Animal Husbandry
          </Link>
        </li>
        <li>
          <Link to="/error/blog" onClick={toggleSidebar}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/error/contact-us" onClick={toggleSidebar}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

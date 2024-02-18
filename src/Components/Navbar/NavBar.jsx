import classes from "./NavBar.module.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className={classes["header"]}>
      <nav className={classes["nav"]}>
        <Link to="/home">
          <img src="assets/logo.png" alt="Farm Help Logo" className="logo" />
        </Link>
        {/* <NavLink to="/" className={classes["nav__logo"]}></NavLink> */}

        <div
          className={
            classes["nav__menu"] +
            " " +
            `${showMenu ? classes["show-menu"] : ""}`
          }
          id={classes["nav-menu"]}
        >
          <ul className={classes["nav__list"]}>
            <li className={classes["nav__item"]}>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["nav__link"]}`
                    : classes["nav__link"]
                }
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className={classes["nav__item"]}>
              <NavLink
                to="/detector"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["nav__link"]}`
                    : classes["nav__link"]
                }
                onClick={closeMenuOnMobile}
              >
                Detector
              </NavLink>
            </li>
            <li className={classes["nav__item"]}>
              <NavLink
                to="/error/animal-husbandry"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["nav__link"]}`
                    : classes["nav__link"]
                }
                onClick={closeMenuOnMobile}
              >
                Animal Husbandry
              </NavLink>
            </li>
            <li className={classes["nav__item"]}>
              <NavLink
                to="/error/blog"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["nav__link"]}`
                    : classes["nav__link"]
                }
                onClick={closeMenuOnMobile}
              >
                Blog
              </NavLink>
            </li>
            <li className={classes["nav__item"]}>
              <NavLink
                to="/error/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["nav__link"]}`
                    : classes["nav__link"]
                }
                onClick={closeMenuOnMobile}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <img
            src="assets/profile-placeholder.png"
            className={classes["profile-placeholder"]}
          ></img>

          {/* <div
            className={classes["nav__close"]}
            id={classes["nav-close"]}
            onClick={toggleMenu}
          >
            <IoClose />
          </div>
        </div>

        <div
          className={classes["nav__toggle"]}
          id={classes["nav-toggle"]}
          onClick={toggleMenu}
        >
          <IoMenu />
        </div> */}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

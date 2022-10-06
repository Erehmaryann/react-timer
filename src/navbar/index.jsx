import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  console.log(location.pathname, "Heyy");

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo-container">
          <Link to="/">Logo</Link>
        </div>
        <div className="navlinks-container">
          <NavLink
            to="/"
            className={location.pathname == "/" ? "active" : "inactive"}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={location.pathname == "/about" ? "active" : "inactive"}
          >
            About
          </NavLink>
          <NavLink
            to="team"
            className={location.pathname == "/team" ? "active" : "inactive"}
          >
            Team
          </NavLink>
          <NavLink
            to="partners"
            className={location.pathname == "/partners" ? "active" : "inactive"}
          >
            Partners
          </NavLink>
          <NavLink
            to="blog"
            className={location.pathname == "/blog" ? "active" : "inactive"}
          >
            Blog
          </NavLink>
          <NavLink
            to="event"
            className={location.pathname == "/event" ? "active" : "inactive"}
          >
            Events
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="nav-bar">
        <NavLink exact activeClassName="active-class" to="/">
          About Us
        </NavLink>
        <NavLink exact activeClassName="active-class" to="/Services">
          Services
        </NavLink>
        <NavLink exact activeClassName="active-class" to="/Search">
          Search
        </NavLink>
        <NavLink exact activeClassName="active-class" to="/User/Naveen/babu">
          User
        </NavLink>
        <NavLink exact activeClassName="active-class" to="/Contact">
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default Menu;

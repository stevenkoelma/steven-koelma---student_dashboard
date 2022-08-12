import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name }) => {
  let path = `/student/${name}`;

  return (
    <NavLink to={path} style={{ textDecoration: "none" }} className="nav-item">
      <li>{name}</li>
    </NavLink>
  );
};

export default NavItem;

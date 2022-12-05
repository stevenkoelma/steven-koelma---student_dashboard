import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name }) => {
  let path = `/student/${name}`;

  return (
    <li>
      <NavLink to={path} className="nav-item navigation__item">
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;

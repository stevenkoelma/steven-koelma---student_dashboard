import React from "react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
import { names } from "../../data";

const Navbar = () => {
  const students = [...new Set(names)];

  const studentNavigation = students.map((student, index) => {
    return <NavItem name={student} id={"student-" + index} key={index} />;
  });

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list wrap">
          <li>
            <NavLink className="nav-item navigation__item" to="/">
              All students
            </NavLink>
          </li>
          {studentNavigation}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
import { names, tasks } from "../data";

const Navbar = () => {
  /*Get students and assignment names once*/
  const students = [...new Set(names)];

  const studentNavigation = students.map((student, index) => {
    return <NavItem name={student} id={"student-" + index} key={index} />;
  });

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink className="nav-item" to="/">
                Alle studenten
              </NavLink>
            </li>
            {studentNavigation}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

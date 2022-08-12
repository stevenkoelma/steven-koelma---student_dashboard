import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { names, tasks } from "../data";

const Navbar = () => {
  /*Get students and assignment names once*/
  const students = [...new Set(names)];
  const assignments = [...new Set(tasks)];

  const student = students.map((student, index) => {
    return <NavItem name={student} id={"student-" + index} key={index} />;
  });

  const assignment = assignments.map((assignment, index) => {
    return (
      <li key={index}>
        <Link to={`/assignment/${assignment}`.toLowerCase()}>{assignment}</Link>
      </li>
    );
  });

  return (
    <>
      <header>
        <nav>
          <ul>{student}</ul>
          {/* <ul>{assignment}</ul> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;

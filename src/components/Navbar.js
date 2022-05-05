import React from "react";
import { Link } from "react-router-dom";
import { names } from "../data";

const Navbar = () => {
   
 //TODO Navbar voor studenten uitwerken en namen aanklikbaarmaken
 //TODO Juiste benaming   


/*Get alle student names once*/ 
  const students = [...new Set(names)];

/*Create list item with student name*/  
  const singleStudent = students.map((student) => {
    return <li>{student}</li>;
  });

  return (
    <>
      <header>
        <nav>
          <ul>{singleStudent}</ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

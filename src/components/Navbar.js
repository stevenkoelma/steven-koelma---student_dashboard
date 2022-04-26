import React from "react";
import { names } from "../data";

const Navbar = () => {

      return (
    <>
      <header>
        <nav>
          <ul>
            <li>{names}</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

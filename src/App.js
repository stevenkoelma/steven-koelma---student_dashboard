import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import Home from "./components/Home";
import data from "./data";

import React, { useState } from "react";

function App() {
  const [students] = useState(data);
  const show = true;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home showchart={show} />}></Route>
          <Route
            exact
            path="/student/:name"
            element={<Student showchart={show} studentData={students} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

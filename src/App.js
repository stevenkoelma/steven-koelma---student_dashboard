import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Student from "./components/Student";
import Filter from "./components/Filter";
import data from "./data";


import React, { useState } from "react";

function App() {
  const [students] = useState(data);

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route
            exact
            path="/"
            element={<Filter />}
          ></Route>
          <Route
            exact
            path="/student/:name"
            element={<Student studentData={students} />}
          ></Route>
        </Routes>
     
      </Router>
    </>
  );
}

export default App;

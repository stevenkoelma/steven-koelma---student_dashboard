import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import Home from "./components/Charts/Overview";
import data from "./data";

import React, { useState } from "react";

function App() {
  const [students] = useState(data);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
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

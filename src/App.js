import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import data from "./data";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const { name } = useParams();
  const [students, setStudents] = useState(data);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/student/:name"
            element={<Student students={students} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

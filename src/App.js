import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import Home from "./components/Home";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [students] = useState(data);

  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/student/:name",
      component: () => <Student students={students} />,
    },
  ];

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route>{routeComponents}</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

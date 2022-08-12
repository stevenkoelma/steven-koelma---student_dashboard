import React from "react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";

const Student = ({ students }) => {
  const { name } = useParams();

  const student = students.filter((student) => student.name === name);

  console.log(student);

  //TODO render object

  return (
    <div className="chart">
      <h2>{name}</h2>
    </div>
  );
};

export default Student;

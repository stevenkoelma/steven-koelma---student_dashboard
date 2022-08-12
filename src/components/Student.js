import React from "react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";

const Student = ({ students }) => {
  const { name } = useParams();

  const selectName = students.filter((student) => student.name === name);

  const foo = selectName.map((element) => element);

  //TODO render object

  return (
    <div className="chart">
      <h2>{name}</h2>
      <Chart student={foo} />
    </div>
  );
};

export default Student;

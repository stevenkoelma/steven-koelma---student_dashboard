import React from "react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";

const Student = ({ students }) => {
  const { name } = useParams();

  const selectName = students.filter((student) => student.name === name);
  const chartdata = selectName.map((element) => element);

  return (
    <div className="chart">
      <h2>{name}</h2>
      <Chart chartdata={chartdata} />
    </div>
  );
};

export default Student;

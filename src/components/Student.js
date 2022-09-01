import React from "react";
import { useParams } from "react-router-dom";
import Chart from "./Charts/StudentChart";

const Student = ({ studentData }) => {
  const { name } = useParams();

  const selectName = studentData.filter((student) => student.name === name);
  const singleStudentData = selectName.map((element) => element);

  console.log(singleStudentData);

  return (
    <div className="chart">
      <h2>{name}</h2>
      <Chart singleStudentData={singleStudentData} />
    </div>
  );
};

export default Student;

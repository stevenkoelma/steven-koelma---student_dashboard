import React from "react";
import { useParams } from "react-router-dom";
import Chart from "./Charts/StudentChart";
import Filter from "./Filter";

const Student = ({ studentData, showchart }) => {
  const { name } = useParams();

  const selectName = studentData.filter((student) => student.name === name);
  const singleStudentData = selectName.map((element) => element);

  return (
    <>
      <Filter showchart={showchart} />
      <div className="chart">
        <h2>{name}</h2>
        <Chart singleStudentData={singleStudentData} />
      </div>
    </>
  );
};

export default Student;

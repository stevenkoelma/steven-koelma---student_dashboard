import React from "react";
import { useParams } from "react-router-dom";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryLabel,
  VictoryLine,
  VictoryLegend,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

const Chart = ({ student }) => {
  console.log(student);

  return (
    <>
      <h2>Naam: {student}</h2>
    </>
  );
};

export default Chart;

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
  return (
    <>
      <VictoryChart>
        <VictoryGroup>
          <VictoryBar
            data={student}
            x="assignment"
            y="difficulty"
            tickValues={[1, 2, 3, 4, 5]}
            style={{ data: { fill: "#e60505" } }}
            animate={{
              duration: 700,
              onLoad: { duration: 700 },
            }}
          />
          <VictoryBar
            data={student}
            x="assignment"
            y="enjoyment"
            tickValues={[1, 2, 3, 4, 5]}
            style={{ data: { fill: "#05e6a6" } }}
            animate={{
              duration: 700,
              onLoad: { duration: 700 },
            }}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{
            ticks: {
              fill: "transparent",
              size: 2,
              stroke: "black",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
          }}
          tickLabelComponent={
            <VictoryLabel
              angle={() => {
                return student.length < 16 ? 0 : 60;
              }}
              dx={-8.5}
              dy={-6}
              style={{
                fontSize: 4,
                fill: "#223243",
              }}
              textAnchor={"start"}
            />
          }
        />
        <VictoryAxis
          dependentAxis
          domain={[0, 5]}
          style={{
            tickLabels: {
              fontSize: 4,
              fill: "#223243",
            },
          }}
        />
      </VictoryChart>
    </>
  );
};

export default Chart;

import React, { useEffect } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryLabel,
  VictoryLine,
  VictoryLegend,
  VictoryTooltip,
} from "victory";

const Chart = ({ singleStudentData }) => {
  const assignments = singleStudentData.map((item) => item.assignment);

  return (
    <>
      <VictoryChart domain={{ y: [0, 5] }}>
        <VictoryGroup offset={160 / 56}>
          <VictoryBar
            data={singleStudentData}
            x="assignment"
            y="difficulty"
            barWidth={130 / 56}
            style={{ data: { fill: "#e60505" } }}
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignments}
            labelComponent={
              <VictoryTooltip
                cornerRadius={2}
                pointerLength={6}
                pointerWidth={4}
                flyoutStyle={{
                  stroke: "#96b97d",
                  strokeWidth: 0.4,
                  fill: "#d6e2f0",
                }}
                style={{
                  fontSize: 6,
                  fill: "#1d334a",
                }}
                animate={{
                  duration: 700,
                  onLoad: { duration: 700 },
                }}
              />
            }
          />
          <VictoryBar
            data={singleStudentData}
            x="assignment"
            y="enjoyment"
            style={{ data: { fill: "#05e6a6" } }}
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignments}
            labelComponent={
              <VictoryTooltip
                cornerRadius={2}
                pointerLength={6}
                pointerWidth={4}
                flyoutStyle={{
                  stroke: "#96b97d",
                  strokeWidth: 0.4,
                  fill: "#d6e2f0",
                }}
                style={{
                  fontSize: 6,
                  fill: "#1d334a",
                }}
                animate={{
                  duration: 700,
                  onLoad: { duration: 700 },
                }}
              />
            }
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignments}
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
                return 56 < 16 ? 0 : 60;
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

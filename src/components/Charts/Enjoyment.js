import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
  VictoryTooltip,
} from "victory";
import {
  getAveragesEnjoyment,
} from "../../functions/Average";

const Chart = () => {

  const averageEnjoyment = getAveragesEnjoyment.map((item) => item.average);
  const assignment = getAveragesEnjoyment.map((item) => item.assignment);

  return (
    <>
      <VictoryChart domain={{ y: [0, 5] }}>
        <VictoryGroup offset={160 / assignment.length}>          
          <VictoryBar
            data={averageEnjoyment}
            x="assignment"
            y="difficulty"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignment}
            barWidth={130 / 56}
            style={{ data: { fill: "#00FF00" } }}
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
          tickFormat={assignment}
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
                return assignment.length < 16 ? 0 : 60;
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

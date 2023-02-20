import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
  VictoryTooltip,
  VictoryLine,
} from "victory";

import { getAveragesDifficulty } from "../../functions/Average";

const Chart = () => {
  const assignment = getAveragesDifficulty.map((item) => item.assignment);

  return (
    <>
      <VictoryChart height={180} padding={20} width={400}>
        <VictoryLegend
          x={160}
          y={10}
          orientation="horizontal"
          style={{
            labels: {
              fontSize: 12,
              fill: "#120faa",
            },
          }}
          data={[
            { name: "Difficulty", symbol: { fill: "#c03535", type: "square" } },
          ]}
        />
        <VictoryLine
          y={() => 1}
          style={{
            data: {
              stroke: "black",
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 2}
          style={{
            data: {
              stroke: "black",
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 3}
          style={{
            data: {
              stroke: "black",
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 4}
          style={{
            data: {
              stroke: "black",
              strokeWidth: 0.3,
            },
          }}
        />
        <VictoryLine
          y={() => 5}
          style={{
            data: {
              strokeWidth: 0,
            },
          }}
        />

        <VictoryGroup offset={160 / assignment.length}>
          <VictoryBar
            data={getAveragesDifficulty}
            alignment="middle"
            x="assignment"
            y="average"
            animate={{
              duration: 700,
              onLoad: { duration: 700 },
            }}
            barWidth={130 / assignment.length}
            style={{ data: { fill: "#c03535" } }}
            labels={({ datum }) => {
              return `Average : ${datum.average}`;
            }}
            labelComponent={
              <VictoryTooltip
                cornerRadius={2}
                pointerLength={60}
                pointerWidth={4}
                flyoutStyle={{
                  stroke: "#c03535",
                  strokeWidth: 0.4,
                  fill: "#d6e2f0",
                }}
                style={{
                  fontSize: 6,
                  fill: "#1d334a",
                }}
              />
            }
          />
        </VictoryGroup>
        <VictoryAxis
          domain={{ x: [0, 57] }}
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
                fontWeight: "bold",
              }}
              textAnchor={"start"}
            />
          }
        />
        <VictoryAxis
          dependentAxis
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

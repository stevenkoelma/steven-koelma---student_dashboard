import React, { useEffect, useState } from "react";
import Overview from "./Charts/Overview";
import Difficulty from "./Charts/Difficulty";
import Enjoyment from "./Charts/Enjoyment";

const Filter = () => {
  const [chart, setChart] = useState(true);
  const [bothChartsVisible, setBothChartsVisible] = useState(true);
  const [difficultyChartVisible, setDifficultyChartVisible] = useState(false);
  const [enjoymentChartVisible, setEnjoymentChartVisible] = useState(false);

  const handleOnChange = (e) => {
    setChart(e.target.value);
  };

  useEffect(() => {
    chart === "both" ? setBothChartsVisible(true) : setBothChartsVisible(false);
    chart === "difficulty"
      ? setDifficultyChartVisible(true)
      : setDifficultyChartVisible(false);
    chart === "enjoyment"
      ? setEnjoymentChartVisible(true)
      : setEnjoymentChartVisible(false);
  }, [chart]);

  const renderChart = () => {
    let result;
    if (chart === true || bothChartsVisible === true) {
      result = <Overview />;
    }

    if (difficultyChartVisible === true) {
      result = <Difficulty />;
    }

    if (enjoymentChartVisible === true) {
      result = <Enjoyment />;
    } 

    return result;
  };

  return (
    <div className="container">
      <div className="filters">
        <p>Select your filters here:</p>
        <form>
          <select value={chart} onChange={handleOnChange}>
            <option value="both">Both</option>
            <option value="difficulty">Hoe moeilijk was de opdracht?</option>
            <option value="enjoyment">Hoe leuk was de opdracht?</option>
          </select>
        </form>
        <div>{renderChart()}</div>
      </div>
    </div>
  );
};

export default Filter;

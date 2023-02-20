import React, { useEffect, useState } from "react";
import Overview from "../Charts/Overview";
import Difficulty from "../Charts/Difficulty";
import Enjoyment from "../Charts/Enjoyment";

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
    <>
      <div className="chart wrap">
        <div className="filter">
          <p>Select your filters here:</p>
          <form className="filter__form">
            <select value={chart} onChange={handleOnChange}>
              <option value="both">Both</option>
              <option value="difficulty">
                How difficult was the assignment?
              </option>
              <option value="enjoyment">How nice was the assignment?</option>
            </select>
          </form>
        </div>
        <div>{renderChart()}</div>
      </div>
    </>
  );
};

export default Filter;

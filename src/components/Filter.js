import React, { useEffect, useState } from "react";
import Overview from "./Charts/Overview";
import Difficulty from "./Charts/Difficulty"
import Enjoyment from "./Charts/Enjoyment"

const Filter = () => {
  const [chart, setChart] = useState("selectChart");
  const [bothChartsVisible, setBothChartsVisible] = useState(true)
  const [difficultyChartVisible, setDifficultyChartVisible] = useState(false);
  const [enjoymentChartVisible, setEnjoymentChartVisible] = useState(false);

  const handleOnChange = (e) => {
    setChart(e.target.value);
  };

  useEffect(() => {
    chart === "both"
      ? setBothChartsVisible(true)
      : setBothChartsVisible(false);
    chart === "difficulty"
      ? setDifficultyChartVisible(true)
      : setDifficultyChartVisible(false);
    chart === "enjoyment"
      ? setEnjoymentChartVisible(true)
      : setEnjoymentChartVisible(false);
  }, [chart]);

  const renderResult = () => {
    let result;
    chart === "selectDreamCar"
      ? (result = "select your dream car")
      : (result = chart);
    return result;
  };

  return (
    <div className="container">
      <div>
        <h1>{renderResult()}</h1>
      </div>
      <div className="filters">
        <p>Select your filters here:</p>
        <form>
          <select value={chart} onChange={handleOnChange}>
            <option selected="selected" value="both">Both</option>
            <option value="difficulty">Hoe moeilijk was de opdracht?</option>
            <option value="enjoyment">Hoe leuk was de opdracht?</option>
          </select>
        </form>
      </div>
      {bothChartsVisible && <Overview />}
      {difficultyChartVisible && <Difficulty/>}
      {enjoymentChartVisible && <Enjoyment />}      
    </div>
  );
};

export default Filter;
